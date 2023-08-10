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

const StudentDB = () => {
  const { activeUser } = useContext(AuthContext);
  // const { upcomingSessions, getUpcomingSessions } = useContext(SessionContext);
  const { tutors } = useContext(TutorContext);
  const navigation = useNavigation();

  console.log("The current user name is: ", activeUser);

  // useEffect(() => {
  //   const studentId = auth.currentUser.uid;
  //   // Fetch pending requests associated with the tutor
  //   const fetchPendingRequests = async () => {
  //     await getUpcomingSessions(studentId);
  //   };

  //   fetchPendingRequests();
  // }, []);

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
        {/* {upcomingSessions.map((sessions) => {
          return <SessionCard tutor={sessions.tutorName} />;
        })} */}
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
