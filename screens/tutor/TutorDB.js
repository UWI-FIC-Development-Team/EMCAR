import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, ScrollView, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import TopBar2 from "../../components/atoms/TopBar2";
import SessionCard from "../../components/atoms/SessionCard";
import { AuthContext } from "../../context/AuthContextProvider";
import { TutorContext } from "../../context/TutorContextProvider";
import { SessionContext } from "../../context/RequestContextProvider";
import { auth } from "../../services/firebaseConfig";
import { TouchableOpacity } from "react-native";
import InfoText from "../../components/atoms/InfoText";

const TutorDB = () => {
  const { activeUser } = useContext(AuthContext);
  const { tutors, getPendingRequests, pendingRequests } =
    useContext(TutorContext);
  const { getTutorUpcomingSessions, tutorUpcomingSessions } =
    useContext(SessionContext);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch pending requests associated with the tutor
    const fetchPendingRequests = async () => {
      const tutorId = auth.currentUser.uid;
      console.log("Current user ID:", tutorUpcomingSessions);
      await getPendingRequests(tutorId);
      await getTutorUpcomingSessions(tutorId);
    };

    fetchPendingRequests();
  }, []);

  return (
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle={"dark-content"} />

      <TopBar2 userName={activeUser} />
      <DashBoardCard
        showTitle={true}
        title={"Pending Sessions"}
        showSeeAll={true}
      >
        {pendingRequests ? (
          pendingRequests.map((request) => (
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
      <DashBoardCard
        showTitle={true}
        title={"Upcoming Sessions"}
        showSeeAll={true}
      >
       {tutorUpcomingSessions ? (
          tutorUpcomingSessions.map((request) => (
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
      <DashBoardCard
        showTitle={true}
        title={"Recent Sessions"}
        showSeeAll={true}
      ></DashBoardCard>
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
