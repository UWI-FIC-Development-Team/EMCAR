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

  console.log("Details for the request:", 
    studentName,
    tutorId,
    subjects,
    topics,
    formattedRequestDate,
    // formattedStartTime,
    // formattedEndTime,
    location,
    additionalDetails,
  );

  return (
    <View style={styles.confirmSessionDetails}>
      <View style={styles.headlineParent}>
        <Text style={[styles.headline, styles.headlineTypo]}>
          Session Details
        </Text>
        <Text style={[styles.title, styles.textSpaceBlock]}>
          This page displays the information you provided for your tutor
          request. This helps the tutor prepare a personalized lesson for you.
        </Text>
      </View>
      <View style={styles.buttomsFlexBox}>
        <View style={styles.listSpaceBlock}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Courses</Text>
          </View>

          {subjects.map((course, index) => {
            return (
              <Text style={styles.text}>
                {course}
              </Text>
            );
          })}
          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Topics</Text>
          </View>

          {topics.map((topic, index) => {
            return (
              <Text style={styles.text}>
                {topic}
              </Text>
            );
          })}

          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Date</Text>
          </View>
          <Text style={[ styles.textTypo]}>{formattedRequestDate}</Text>
          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Time</Text>
          </View>
          <View style={[styles.time, styles.textSpaceBlock]}>
            <Text style={styles.textTypo}>From:{}</Text>
            <Text style={[styles.text6, styles.textTypo]}>
              To:{}
            </Text>
          </View>
          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>
              Additional information
            </Text>
          </View>
          <Text style={[styles.text7, styles.textTypo]}>
            {additionalDetails}
          </Text>
        </View>
      </View>
      <PrimaryButton title={"Confirm session"} onPress={() => {}} />
      <PrimaryButton title={"Reject request"} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  headlineTypo: {
    textAlign: "left",
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  textSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  listSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.lightcyan_100,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.materialThemeLabelMedium_size,
    textAlign: "left",
  },
  buttomsFlexBox: {
    marginTop: 25,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    height: 50,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelFlexBox: {
    width: 302,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 20,
    fontSize: FontSize.materialThemeTitleSmall_size,
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    alignItems: "center",
    flex: 1,
  },
  headline: {
    fontSize: FontSize.title3_size,
    lineHeight: 28,
    color: Color.materialThemeSysLightOnSurface,
  },
  title: {
    color: "#487777",
    lineHeight: 20,
    fontSize: FontSize.materialThemeTitleSmall_size,
    marginTop: 12,
    textAlign: "left",
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  headlineParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  headline1: {
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    lineHeight: 24,
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  content: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  text: {
    color: Color.darkslategray_200,
    height: 16,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.materialThemeLabelMedium_size,
    marginTop: 12,
    textAlign: "left",
    alignSelf: "stretch",
  },
  divider: {
    backgroundColor: Color.gainsboro,
    height: 2,
  },
  text2: {
    marginTop: 12,
    alignSelf: "stretch",
    flex: 1,
  },
  listDialog1: {
    marginTop: 8,
  },
  text6: {
    marginLeft: 8,
  },
  time: {
    flexDirection: "row",
  },
  text7: {
    height: 82,
    marginTop: 12,
    alignSelf: "stretch",
  },
  labelText: {
    color: Color.materialThemeSysLightOnSecondaryContainer,
  },
  buttonTonal: {
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
  },
  labelText1: {
    color: Color.white,
  },
  buttonFilled: {
    backgroundColor: Color.materialThemeSysLightPrimary,
    marginTop: 15,
  },
  buttoms: {
    justifyContent: "flex-end",
    flex: 1,
  },
  confirmSessionDetails: {
    backgroundColor: "#fff",
    width: "100%",
    height: 806,
    paddingHorizontal: Padding.p_6xl,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
});

export default RequestConfirmationScreen;
