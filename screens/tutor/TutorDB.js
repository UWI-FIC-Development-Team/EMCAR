import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";

import { FontFamily, Padding, Color } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import TopBar2 from "../../components/atoms/TopBar2";
import SessionCard from "../../components/atoms/SessionCard";
import { AuthContext } from "../../context/AuthContextProvider";
import { SessionContext } from "../../context/RequestContextProvider";
import InfoText from "../../components/atoms/InfoText";
import { auth } from "../../services/firebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingDialog from "../../components/organisms/LoadingDialog";

const TutorDB = () => {
  const { activeUser } = useContext(AuthContext);
  const {
    tutorUpcomingSessions,
    pendingRequests,
    addPendingRequestsListener,
    addUpcomingSessionsListener,
    user,
  } = useContext(SessionContext);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (user) {
      const userId = auth.currentUser.uid;
      const userType = "tutor"; // or "student" based on your use case
      const pendingRequestsUnsubscribe = addPendingRequestsListener(
        userId,
        userType
      );
      const upcomingSessionsUnsubscribe = addUpcomingSessionsListener(
        userId,
        userType
      );

      return () => {
        upcomingSessionsUnsubscribe();
        pendingRequestsUnsubscribe(); // Cleanup the listener when the component unmounts
      };
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.studentDb}>
      <ScrollView>
        <StatusBar batstyle="dark-content" backgroundColor="#fff" />

        <TopBar2 userName={activeUser.name} />
        <DashBoardCard
          showTitle
          title={`Pending Sessions(${pendingRequests.length})`}
          showSeeAll
          onPress={() => {
            navigation.navigate("render list", { List: pendingRequests });
          }}
        >
          {pendingRequests.length === 0 ? (
            <InfoText info="No sessions pending" />
          ) : (
            <TouchableOpacity
              key={pendingRequests[0].requestId}
              onPress={() => {
                const request = pendingRequests[0];
                navigation.navigate("Confirm Request", {
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
                name={pendingRequests[0].studentName}
                time={pendingRequests[0].startTime
                  .toDate()
                  .toLocaleTimeString()}
                course={pendingRequests[0].subjects[0]}
                Topic={pendingRequests[0].topics[0]}
                date={pendingRequests[0].requestDate
                  .toDate()
                  .toLocaleDateString()}
                location={pendingRequests[0].location}
              />
            </TouchableOpacity>
          )}
        </DashBoardCard>
        <DashBoardCard
          showTitle
          title={`Upcoming Sessions(${tutorUpcomingSessions.length})`}
          showSeeAll
          onPress={() => {
            navigation.navigate("render list", { List: tutorUpcomingSessions });
          }}
        >
          {tutorUpcomingSessions.length === 0 ? (
            <InfoText info="No upcoming sessions" />
          ) : (
            <TouchableOpacity
              key={tutorUpcomingSessions[0].requestId}
              onPress={() => {
                const request = tutorUpcomingSessions[0];
                navigation.navigate("Confirm Request", {
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
                name={tutorUpcomingSessions[0].studentName}
                time={tutorUpcomingSessions[0].startTime
                  .toDate()
                  .toLocaleTimeString()}
                course={tutorUpcomingSessions[0].subjects[0]}
                Topic={tutorUpcomingSessions[0].topics[0]}
                date={tutorUpcomingSessions[0].requestDate
                  .toDate()
                  .toLocaleDateString()}
                location={tutorUpcomingSessions[0].location}
              />
            </TouchableOpacity>
          )}
        </DashBoardCard>
        <DashBoardCard showTitle title="Recent Sessions" showSeeAll>
          <InfoText info="no recent sessions" />
        </DashBoardCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  studentDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default TutorDB;
