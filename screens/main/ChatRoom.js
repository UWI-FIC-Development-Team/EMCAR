import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { TouchableOpacity, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { auth, db } from "../../services/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function ChatRoom({ route }) {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const { chatId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Feather
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, [navigation]);

  // This function displays the chat messages
  useLayoutEffect(() => {
    // Create a reference to the user-specific subcollection
    const collectionRef = collection(db, "chats", chatId, "messages");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });

    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];

    // Add the message to the user-specific subcollection
    addDoc(collection(db, "chats", chatId, "messages"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: "#fff",
      }}
      textInputStyle={{
        backgroundColor: "#fff",
        borderRadius: 20,
      }}
      user={{
        _id: auth.currentUser.uid, // Use UID instead of email
        name: auth.currentUser.displayName,
      }}
    />
  );
}
