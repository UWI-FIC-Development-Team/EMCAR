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
import { AntDesign } from "@expo/vector-icons";

export default function ChatRoom({ route }) {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const currentUserUID = auth?.currentUser?.uid; // Get the current user's UID
  const { recipientUID, Name } = route.params; // Extract userUID from route.params

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          <AntDesign
            name="logout"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <AntDesign
            onPress={navigation.goBack}
            name="arrowleft"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(
      collectionRef,
      where("recipientUID", "==", currentUserUID),
      where("senderUID", "==", recipientUID),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });

    return unsubscribe;
  }, [currentUserUID, recipientUID]);

  const onSend = useCallback(
    (messages = []) => {
      const message = messages[0];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );

      // Send the message to Firestore
      addDoc(collection(db, "messages"), {
        _id: message._id,
        createdAt: message.createdAt,
        text: message.text,
        user: message.user,
        recipientUID: recipientUID,
        senderUID: currentUserUID,
      });
    },
    [currentUserUID, recipientUID]
  );

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
        _id: currentUserUID,
        avatar: "https://i.pravatar.cc/300",
      }}
    />
  );
}
