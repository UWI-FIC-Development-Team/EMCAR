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
import { signOut } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import uuid from "react-native-uuid";

export default function ChatRoom({ route }) {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  // const currentUserUID = auth?.currentUser?.uid; // Get the current user's UID
  // const { recipientUID, Name } = route.params; // Extract userUID from route.params
  // Add a header to the top of the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Feather
            onPress={() => navigation.goBack()} // Fix: Add an arrow function to onPress
            name="arrowleft"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, [navigation]);

  //This function displays the chat messages
  useLayoutEffect(() => {
    const collectionRef = collection(db, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
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
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, "chats"), {
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
        _id: auth?.currentUser?.email,
      }}
    />
  );
}
