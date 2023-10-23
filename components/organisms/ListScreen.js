import { View, StyleSheet, TouchableOpacity } from "react-native";

import DashBoardCard from "../atoms/DashBoardCard";
import SessionCard from "../atoms/SessionCard";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
const ListScreen = ({ route, navigation }) => {
  const { List } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        {List.map((request) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Session Details", {
                requestId: request.requestId,
                studentName: request.studentName,
                tutorId: request.tutorId,
                subjects: request.subjects,
                topics: request.topics,
                requestDate: request.requestDate,
                startTime: request.startTime,
                endTime: request.endTime,
                location: request.location,
                additionalDetails: request.additionalDetails,
              });
            }}
          >
            <SessionCard
              key={request.requestId}
              name={request.studentName}
              time={request.startTime.toDate().toLocaleTimeString()}
              course={request.subjects[0]}
              Topic={request.topics[0]}
              date={request.requestDate.toDate().toLocaleDateString()}
              location={request.location}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },
});

export default ListScreen;
