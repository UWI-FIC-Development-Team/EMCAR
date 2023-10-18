import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
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
import InfoText from "../../components/atoms/InfoText";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const TutorDB = () => {
  const { activeUser } = useContext(AuthContext);
  const { tutorUpcomingSessions, pendingRequests, fetchPendingRequests } =
    useContext(SessionContext);
  const { fetchCurrentTutor } = useContext(TutorContext);

  console.log("Check to see if this object throws an error:", pendingRequests);

  //Todo: modify the arrays above to check of the list is empty. if yes. do something

  const isPendingRequestsEmpty = pendingRequests.length === 0;
  const isTutorUpcomingSessionsEmpty = tutorUpcomingSessions.length === 0;

  const firstItemInTutorUpcomingSessions = tutorUpcomingSessions.slice(0, 1);
  const firstItemInPendingRequest = pendingRequests.slice(0, 1);

  const numberOfPendingSessions = pendingRequests ? pendingRequests.length : 0;
  const numberOfTutorUpcomingSessions = tutorUpcomingSessions
    ? tutorUpcomingSessions.length
    : 0;

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false); // Step 2

  useEffect(() => {
    fetchPendingRequests();
    fetchCurrentTutor();
  }, []);

  const onRefresh = async () => {
    // Step 2
    try {
      setRefreshing(true);
      await fetchPendingRequests();
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.error("Error while refreshing:", error);
    }
  };

  return (
    <SafeAreaView style={styles.studentDb}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StatusBar style="auto" />

        <TopBar2 userName={activeUser.name} />
        <DashBoardCard
          showTitle
          title={`Pending Sessions(${numberOfPendingSessions})`}
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
          title={`Upcoming Sessions(${numberOfTutorUpcomingSessions})`}
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
    </SafeAreaView>
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
