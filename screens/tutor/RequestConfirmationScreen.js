import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { Divider } from "react-native-paper";

const RequestConfirmationScreen = ({route}) => {

    const {sessionDetails} = route.params
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
          <Text style={styles.text}>Pre-Calculus</Text>
          <Text style={styles.text}>Computing 1</Text>

          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Topics</Text>
          </View>
          <Text style={[styles.text2, styles.textTypo]}>
            Object-Oriented-Programming
          </Text>
          <Text style={styles.text}>Materics</Text>
          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Date</Text>
          </View>
          <Text style={[styles.text2, styles.textTypo]}>30 June 2023</Text>
          <Divider />
        </View>
        <View style={[styles.listDialog1, styles.listSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.headline1, styles.headlineTypo]}>Time</Text>
          </View>
          <View style={[styles.time, styles.textSpaceBlock]}>
            <Text style={styles.textTypo}>From: 12:30 pm</Text>
            <Text style={[styles.text6, styles.textTypo]}>To: 2:30 pm</Text>
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
            Hi, I'm Lisa, a student who needs help with algebra. I have trouble
            understanding some of the concepts and solving the equations. I want
            to improve my grades and confidence in math. I learn best when I see
            examples and practice problems.
          </Text>
        </View>
      </View>
      <PrimaryButton title={'Confirm session'} onPress={()=>{}}/>
      <PrimaryButton title={'Reject request'} onPress={()=>{}}/>
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
    backgroundColor: Color.mintcream_100,
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
