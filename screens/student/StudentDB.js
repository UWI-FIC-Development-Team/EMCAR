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

  console.log("These are the tutor values: ", tutors);

  const { activeUser } = useContext(AuthContext);
  const { upcomingSessions, getStudentUpcomingSessions } =
    useContext(SessionContext);
  const navigation = useNavigation();

  const firstItemInTutorsArray = tutors.slice(0, 1);
  const firstItemInStudentUpcomingSessions = upcomingSessions.slice(0, 1);

  const IsStudentUpcomingSessionsEmpty = upcomingSessions.length === 0;
  const IsTutorsArrayEmpty = tutors.length === 0;

  console.log("The current user name is: ", activeUser.name);

  useEffect(() => {
    // Fetch pending requests associated with the tutor
    const fetchPendingRequests = async () => {
      try {
        const studentId = auth.currentUser.uid;
        await getStudentUpcomingSessions(studentId);
        // Handle the fetched sessions here
        // For example, update state or perform some actions
      } catch (error) {
        // Handle errors that occurred during fetching
        console.error("Error fetching upcoming sessions:", error);
      }
    };

    fetchPendingRequests();
  }, []);

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
            firstItemInTutorsArray.map((tutor) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("view tutor profile", {
                      bio: tutor.Bio,
                      availableTimes: tutor.availableTimes,
                      subjects: tutor.subjects,
                      tutorId: tutor.tutorId,
                      name: tutor.name,
                    });
                  }}
                >
                  <DashBoardChip
                    key={tutor.tutorId}
                    tutorName={tutor.name}
                    iconIsVisible
                  />
                </TouchableOpacity>
              );
            })
          )}
        </DashBoardCard>
        <DashBoardCard showTitle title="Upcoming Sessions" showSeeAll>
          {IsStudentUpcomingSessionsEmpty ? (
            <InfoText info="No upcoming sessions" />
          ) : (
            firstItemInStudentUpcomingSessions.map((request) => (
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
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default StudentDB;
