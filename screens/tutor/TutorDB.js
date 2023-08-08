import React, {useState, useContext, useEffect} from "react";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import TopBar2 from "../../components/atoms/TopBar2";
import SessionCard from "../../components/atoms/SessionCard";
import { AuthContext } from "../../context/AuthContextProvider";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";

const TutorDB = () => {
  const { activeUser } = useContext(AuthContext);
  const { tutors, getPendingRequests, pendingRequests} = useContext(TutorContext);
  const navigation = useNavigation();
  const tutorId = auth.currentUser.uid

  

  useEffect(() => {
    // Fetch pending requests associated with the tutor
    const fetchPendingRequests = async () => {
      await getPendingRequests(tutorId);
  
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
       {pendingRequests.map((request)=>{return(<SessionCard tutor={request.studentName}/>)})}
      </DashBoardCard>
      <DashBoardCard
        showTitle={true}
        title={"Upcoming Sessions"}
        showSeeAll={true}
      >
        <SessionCard />
        <SessionCard />
      </DashBoardCard>
      <DashBoardCard
        showTitle={true}
        title={"Recent Sessions"}
        showSeeAll={true}
      >
        <SessionCard />
        <SessionCard />
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
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default TutorDB;
