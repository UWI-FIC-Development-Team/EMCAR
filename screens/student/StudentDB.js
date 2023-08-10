import React, { useState, useCallback, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

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

const StudentDB = () => {
  const { activeUser } = useContext(AuthContext);
  const { upcomingSessions, getStudentUpcomingSessions } = useContext(SessionContext);
  const { tutors } = useContext(TutorContext);
  const navigation = useNavigation();

  console.log("The current user name is: ", activeUser);

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
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle={"dark-content"} />

      <TopBar2 userName={activeUser} />
      <DashBoardCard
        showSeeAll={true}
        showTitle={true}
        title={"Recent tutors"}
        onPress={() => {
          navigation.navigate("All tutors");
        }}
      >
        {tutors.map((tutor, index) => {
          return (
            <DashBoardChip
              key={index}
              tutorName={tutor.name}
              iconIsVisible={true}
            />
          );
        })}
      </DashBoardCard>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => {
          navigation.navigate("All tutors");
        }}
      ></TouchableOpacity>
      <DashBoardCard
        showTitle={true}
        title={"Upcoming Sessions"}
        showSeeAll={true}
      >
        {upcomingSessions !== undefined? (
          upcomingSessions.map((request) => (
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
          ))
        ) : (
          <InfoText />
        )}
      </DashBoardCard>
      <FloatingButton />
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

export default StudentDB;
