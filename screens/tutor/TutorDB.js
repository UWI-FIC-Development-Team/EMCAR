import { useNavigation } from "@react-navigation/native";
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
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
  const {
    tutorUpcomingSessions,
    pendingRequests,
    addPendingRequestsListener,
    addUpcomingSessionsListener,
    user,
  } = useContext(SessionContext);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

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

  // Optimize the following values with useMemo
  const numberOfPendingSessions = useMemo(
    () => (pendingRequests ? pendingRequests.length : 0),
    [pendingRequests]
  );
  const numberOfTutorUpcomingSessions = useMemo(
    () => (tutorUpcomingSessions ? tutorUpcomingSessions.length : 0),
    [tutorUpcomingSessions]
  );
  const isPendingRequestsEmpty = useMemo(
    () => pendingRequests.length === 0,
    [pendingRequests]
  );
  const isTutorUpcomingSessionsEmpty = useMemo(
    () => tutorUpcomingSessions.length === 0,
    [tutorUpcomingSessions]
  );

  // Memoize the first items in lists
  const firstItemInTutorUpcomingSessions = useMemo(
    () => tutorUpcomingSessions.slice(0, 1),
    [tutorUpcomingSessions]
  );
  const firstItemInPendingRequest = useMemo(
    () => pendingRequests.slice(0, 1),
    [pendingRequests]
  );

  // Define the optimized callback
  const handleItemClick = useCallback(
    (request) => {
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
    },
    [navigation]
  );

  // Define the refresh callback
  // const onRefresh = useCallback(async () => {
  //   setRefreshing(true);
  //   try {
  //     await fetchPendingRequests();
  //   } catch (error) {
  //     console.error("Error while refreshing:", error);
  //   } finally {
  //     setRefreshing(false);
  //   }
  // }, [fetchPendingRequests]);

  return (
    <SafeAreaView style={styles.studentDb}>
      <ScrollView>
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
                key={request.requestId}
                onPress={() => handleItemClick(request)}
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
                key={request.requestId}
                onPress={() => handleItemClick(request)}
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
            ))
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
