import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import {
  FontFamily,
  Padding,
  Color,
  Border,
  FontSize,
} from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const RequestConfirmationScreen = ({ route }) => {
  const {
    studentName,
    tutorId,
    subjects,
    topics,
    requestDate,
    startTime,
    endTime,
    location,
    additionalDetails,
  } = route.params;

  // Convert Firestore timestamps to human-readable format
  const formattedRequestDate = requestDate.toDate().toLocaleDateString();
  //   const formattedStartTime = startTime.toDate().toLocaleTimeString();
  //   const formattedEndTime = endTime.toDate().toLocaleTimeString();

  console.log(
    "Details for the request:",
    studentName,
    tutorId,
    subjects,
    topics,
    formattedRequestDate,
    // formattedStartTime,
    // formattedEndTime,
    location,
    additionalDetails
  );

  return (
    <ScrollView style={styles.confirmSessionDetails}>
      <View style={styles.headlineParent}>
        <Text style={styles.headline0}>Session Details</Text>
        <Text style={styles.title}>
          This page displays the information you provided for your tutor
          request. This helps the tutor prepare a personalized lesson for you.
        </Text>
      </View>

      <View style={styles.listSpaceBlock}>
        <Text style={[styles.headline1, styles.headlineTypo]}>Courses</Text>

        {subjects.map((course, index) => {
          return <Text style={styles.textTypo}>{course}</Text>;
        })}
          </View>
        <Divider style={{ width: "100%", height: 3, marginBottom: 16 }} />

        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Topics</Text>

          {topics.map((topic, index) => {
            return <Text style={styles.textTypo}>{topic}</Text>;
          })}

        </View>
          <Divider style={{ width: "100%", height: 3,marginBottom: 16}} />
        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Date</Text>

          <Text style={[styles.textTypo]}>{formattedRequestDate}</Text>
        </View>
          <Divider style={{ width: "100%", height: 3,marginBottom: 16 }} />

        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Time</Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTypo}>From:{}</Text>
            <Text style={styles.textTypo}>To:{}</Text>
          </View>
        </View>

          <Divider style={{ width: "100%", height: 3, marginBottom: 16}} />
        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>
            Additional information
          </Text>

          <Text style={styles.textTypo}>{additionalDetails}</Text>
        </View>
      
      <View style={{ marginVertical: 36 }}>
        <PrimaryButton title={"Confirm session"} onPress={() => {}} />
        <PrimaryButton title={"Reject request"} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
   listSpaceBlock: {
    
  },

  textTypo: {
    color: '#404040',
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    marginBottom:12
  },

  title: {
    color: "#487777",
    lineHeight: 20,
    fontSize: 14,
    marginVertical: 12,
    textAlign: "left",
    // fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  headlineParent: {
    
  },

 headlineTypo: {
    textAlign: "left",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },


  headline1: {
    fontSize: 18,
    lineHeight: 24,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    marginBottom:12
  },
  headline0: {
    fontSize: 24,
    lineHeight: 24,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    justifyContent: "flex-start",
    width: "100%",
    fontWeight:'600'
  },

  confirmSessionDetails: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: Padding.p_5xl,
    flex: 1,
  },
});

export default RequestConfirmationScreen;
