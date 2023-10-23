import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SessionContext } from "../../context/RequestContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";

import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";

const ChatScreen = ({ navigation }) => {
  const { tutorUpcomingSessions, upcomingSessions } =
    useContext(SessionContext);
  const { isTutor } = useContext(AuthContext);

  // Define a function to filter and extract required fields from the sessions
  const extractChatData = (sessions, isTutor) => {
    return sessions
      .filter((session, index, self) => {
        // Filter out duplicate sessions by student/tutor ID
        const id = isTutor ? session.studentId : session.tutorId;
        return (
          self.findIndex((s) => s.studentId === id || s.tutorId === id) ===
          index
        );
      })
      .map((session) => {
        return {
          Name: isTutor ? session.studentName : session.tutorName,
          recipientUID: isTutor ? session.studentId : session.tutorId,
          requestId: session.requestId,
        };
      });
  };

  // Extract chat data based on user role (tutor or student)
  const chatData = isTutor
    ? extractChatData(tutorUpcomingSessions, true)
    : extractChatData(upcomingSessions, false);

  return (
    <SafeAreaView style={styles.chatScreen}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.listDialogParent}>
          <DashBoardCard title="Chats" showTitle>
            {chatData.map((chat) => (
              <DashBoardChip
                key={chat.requestId}
                Name={chat.Name}
                onPress={() => {
                  navigation.navigate("chat room", {
                    Name: chat.Name,
                    chatId: chat.requestId,
                  });
                }}
                iconIsVisible
              />
            ))}
          </DashBoardCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listDialogParent: {
    paddingHorizontal: 20, // Adjust this as needed
  },
});

export default ChatScreen;
