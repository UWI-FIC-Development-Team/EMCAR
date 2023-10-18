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
  console.log("TutorUpcomingSessions: ", tutorUpcomingSessions);
  console.log("UpcomingSessions: ", upcomingSessions);
  return (
    <SafeAreaView style={styles.chatScreen}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.listDialogParent}>
          <DashBoardCard title="Available" showTitle>
            {isTutor
              ? tutorUpcomingSessions.map((student) => (
                  <DashBoardChip
                    key={student.requestId}
                    Name={student.studentName}
                    onPress={() => {
                      navigation.navigate("chat room", {
                        Name: student.studentName,
                        recipientUID: student.studentId,
                      });
                    }}
                    iconIsVisible
                  />
                ))
              : upcomingSessions.map((tutor) => (
                  <DashBoardChip
                    key={tutor.requestId}
                    Name={tutor.tutorName}
                    onPress={() => {
                      navigation.navigate("chat room", {
                        Name: tutor.tutorName,
                        recipientUID: tutor.tutorId,
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
    paddingTop: 20, // Adjust this as needed
  },
});

export default ChatScreen;
