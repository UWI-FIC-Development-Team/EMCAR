import { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import reactotron from "reactotron-react-native";

import SessionCard from "../atoms/SessionCard";
import DashBoardCard from "../atoms/DashBoardCard";

const ListScreen = ({ route, navigation }) => {
  const { List } = route.params;

  return (
    <View style={styles.container}>
      <DashBoardCard showTitle title="Upcoming Sessions" showSeeAll>
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
              name={request.studentName}
              time={request.startTime.toDate().toLocaleTimeString()}
              course={request.subjects[0]}
              Topic={request.topics[0]}
              date={request.requestDate.toDate().toLocaleDateString()}
              location={request.location}
            />
          </TouchableOpacity>
        ))}
      </DashBoardCard>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;
