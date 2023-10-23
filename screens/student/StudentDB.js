import React, { useState, useCallback, useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import TopBar2 from "../../components/atoms/TopBar2";
import SessionCard from "../../components/atoms/SessionCard";
import FloatingButton from "../../components/atoms/FloatingButton";
import { AuthContext } from "../../context/AuthContextProvider";
import { TutorContext } from "../../context/TutorContextProvider";
import { SessionContext } from "../../context/RequestContextProvider";
import { auth } from "../../services/firebaseConfig";
import InfoText from "../../components/atoms/InfoText";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const StudentDB = () => {
  const { tutors } = useContext(TutorContext);

  const { activeUser } = useContext(AuthContext);
  const {
    upcomingSessions,
    addUpcomingSessionsListener,
    addPendingRequestsListener,
    user,
  } = useContext(SessionContext);
  const navigation = useNavigation();

  const firstItemInTutorsArray = tutors.slice(0, 1);
  const firstItemInStudentUpcomingSessions = upcomingSessions.slice(0, 1);

  const IsStudentUpcomingSessionsEmpty = upcomingSessions.length === 0;
  const IsTutorsArrayEmpty = tutors.length === 0;

  useEffect(() => {
    if (user) {
      const userId = auth.currentUser.uid;
      const userType = "student"; // or "student" based on your use case
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
        <StatusBar style="auto" />
        <TopBar2 userName={activeUser.name} />
        <DashBoardCard
          showSeeAll
          showTitle
          title="Recent tutors"
          onPress={() => {
            navigation.navigate("All tutors");
          }}
        >
          {IsTutorsArrayEmpty ? (
            <InfoText info="No tutors available" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("view tutor profile", {
                  bio: firstItemInTutorsArray[0].Bio,
                  availableTimes: firstItemInTutorsArray[0].availableTimes,
                  subjects: firstItemInTutorsArray[0].subjects,
                  tutorId: firstItemInTutorsArray[0].tutorId,
                  name: firstItemInTutorsArray[0].name,
                });
              }}
            >
              <DashBoardChip
                key={firstItemInTutorsArray[0].tutorId}
                Name={firstItemInTutorsArray[0].name}
                iconIsVisible
              />
            </TouchableOpacity>
          )}
        </DashBoardCard>
        <DashBoardCard showTitle title="Upcoming Sessions" showSeeAll>
          {IsStudentUpcomingSessionsEmpty ? (
            <InfoText info="No upcoming sessions" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Session Details", {
                  requestId: firstItemInStudentUpcomingSessions[0].requestId,
                  studentName:
                    firstItemInStudentUpcomingSessions[0].studentName,
                  tutorId: firstItemInStudentUpcomingSessions[0].tutorId,
                  subjects: firstItemInStudentUpcomingSessions[0].subjects,
                  topics: firstItemInStudentUpcomingSessions[0].topics,
                  requestDate:
                    firstItemInStudentUpcomingSessions[0].requestDate,
                  startTime: firstItemInStudentUpcomingSessions[0].startTime,
                  endTime: firstItemInStudentUpcomingSessions[0].endTime,
                  location: firstItemInStudentUpcomingSessions[0].location,
                  additionalDetails:
                    firstItemInStudentUpcomingSessions[0].additionalDetails,
                });
              }}
            >
              <SessionCard
                key={firstItemInStudentUpcomingSessions[0].requestId}
                name={firstItemInStudentUpcomingSessions[0].studentName}
                time={firstItemInStudentUpcomingSessions[0].startTime
                  .toDate()
                  .toLocaleTimeString()}
                course={firstItemInStudentUpcomingSessions[0].subjects[0]}
                Topic={firstItemInStudentUpcomingSessions[0].topics[0]}
                date={firstItemInStudentUpcomingSessions[0].requestDate
                  .toDate()
                  .toLocaleDateString()}
                location={firstItemInStudentUpcomingSessions[0].location}
              />
            </TouchableOpacity>
          )}
        </DashBoardCard>

        <FloatingButton
          title="Request a session"
          navigateTo="Request a session"
        />
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
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default StudentDB;
