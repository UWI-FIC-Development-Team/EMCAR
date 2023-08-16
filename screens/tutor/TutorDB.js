import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  RefreshControl,
  Text,
  TouchableOpacity,
} from "react-native";

import { FontFamily, Padding, Color } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import TopBar2 from "../../components/atoms/TopBar2";
import SessionCard from "../../components/atoms/SessionCard";
import { AuthContext } from "../../context/AuthContextProvider";
import { SessionContext } from "../../context/RequestContextProvider";
import { auth } from "../../services/firebaseConfig";
import InfoText from "../../components/atoms/InfoText";
import reactotron from "reactotron-react-native";

const TutorDB = () => {
  const { activeUser } = useContext(AuthContext);
  const {
    getTutorUpcomingSessions,
    tutorUpcomingSessions,
    getPendingRequests,
    pendingRequests,
    fetchPendingRequests,
  } = useContext(SessionContext);

  //Todo: modify the arrays above to check of the list is empty. if yes. do something

  reactotron.log("This is the data: ", pendingRequests);

  const isPendingRequestsEmpty = pendingRequests.length === 0;
  const isTutorUpcomingSessionsEmpty = tutorUpcomingSessions.length === 0;

  const firstItemInTutorUpcomingSessions = tutorUpcomingSessions.slice(0, 1);
  const firstItemInPendingRequest = pendingRequests.slice(0, 1);

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false); // Step 2

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  const onRefresh = async () => {
    // Step 2
    setRefreshing(true);
    const tutorId = auth.currentUser.uid;
    await getPendingRequests(tutorId);
    await getTutorUpcomingSessions(tutorId);
    // await fetchPendingRequests();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.studentDb}
      refreshControl={
        // Step 3
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar barStyle="dark-content" />

      <TopBar2 userName={activeUser} />
      <DashBoardCard
        showTitle
        title="Pending Sessions"
        showSeeAll
        onPress={() => {
          navigation.navigate("render list", { List: pendingRequests });
        }}
      >
        {isPendingRequestsEmpty ? (
          <InfoText info="No sessions pending" />
        ) : (
          firstItemInPendingRequest.map((request) => (
            <TouchableOpacity
              onPress={() => {
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
                key={request.requestId}
                name={request.studentName}
                time={request.startTime.toDate().toLocaleTimeString()}
                course={request.subjects[0]}
                Topic={request.topics[0]}
                date={request.requestDate.toDate().toLocaleDateString()}
                location={request.location}
              />
            </TouchableOpacity>
          ))
        )}
      </DashBoardCard>
      <DashBoardCard
        showTitle
        title="Upcoming Sessions"
        showSeeAll
        onPress={() => {
          navigation.navigate("render list", { List: tutorUpcomingSessions });
        }}
      >
        {isTutorUpcomingSessionsEmpty ? (
          <InfoText info="No upcoming sessions" />
        ) : (
          firstItemInTutorUpcomingSessions.map((request) => (
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
          ))
        )}
      </DashBoardCard>
      <DashBoardCard showTitle title="Recent Sessions" showSeeAll>
        <Text>No sessions completed</Text>
      </DashBoardCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: Color.materialThemeSysLightPrimary,
  },

  headlineContainer: {
    flex: 1,
    marginLeft: 12,
  },

  headline4: {
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: 12,
    textAlign: "left",
    marginTop: 6,
    color: "#3F4948",
  },
  headline: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "left",
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },

  studentDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default TutorDB;
