import * as React from "react";
import {
  View,
  StyleSheet,
  Text,

  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Padding, Border, FontFamily, Color, FontSize } from "../../GlobalStyles";

const TutorProfileScreen = ({navigation}) => {


    

  return (
    <ScrollView style={styles.tutorPage}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.selectheaderParent, styles.textBlockSpaceBlock]}>
          <View style={[styles.selectheader, styles.cardFlexBox]}>
            {/* <Image
              style={styles.arrowLeft2}
              contentFit="cover"
              source={require("../assets/arrow--left-2.png")}
            /> */}
            <Text style={styles.headline}>Tutor profile</Text>
          </View>
          {/* <ImageBackground
            style={styles.tutorimageIcon}
            resizeMode="cover"
            source={require("../assets/buildingblocksimagethumbnail.png")}
          /> */}
          <Text style={[styles.headline1, styles.headlineTypo1]}>
            Linda Simon
          </Text>
          <Text style={[styles.headline2, styles.headlineTypo1]}>
            Second year computer science student.
          </Text>
        </View>
        <ScrollView
          style={styles.sectionContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sectionContainerScrollViewContent}
        >
          <View style={[styles.section, styles.sectionSpaceBlock]}>
            <View style={styles.segments}>
              <View style={styles.logoAndName}>
                <Text style={[styles.part1, styles.part1Typo]}>3</Text>
                <Text style={[styles.text1, styles.text1Clr]}>courses</Text>
              </View>
              <View style={styles.logoAndName1}>
                <Text style={[styles.part1, styles.part1Typo]}>4</Text>
                <Text style={[styles.text1, styles.text1Clr]}>on going</Text>
              </View>
              <View style={styles.logoAndName1}>
                <Text style={[styles.part1, styles.part1Typo]}>2</Text>
                <Text style={[styles.text1, styles.text1Clr]}>completed</Text>
              </View>
              <View style={styles.logoAndName1}>
                <Text style={[styles.part1, styles.part1Typo]}>1</Text>
                <Text style={[styles.text1, styles.text1Clr]}>not started</Text>
              </View>
            </View>
          </View>
          <View style={[styles.section1, styles.sectionSpaceBlock]}>
            <View style={styles.content}>
              <Text style={[styles.headline3, styles.headlineTypo]}>Bio</Text>
            </View>
            <View style={[styles.textBlock, styles.cardBorder]}>
              <Text style={styles.hiLindaA}>
                Hi, Linda, a computer science student at Stanford University. I
                have been tutoring high school and college students in various
                topics such as programming, data structures, algorithms...
              </Text>
            </View>
          </View>
          <View style={[styles.section1, styles.sectionSpaceBlock]}>
            <View style={styles.content}>
              <Text style={[styles.headline4, styles.headlineTypo]}>
                <Text style={styles.schedule}>Schedule</Text>
                <Text style={styles.text}>(5)</Text>
              </Text>
              <Text style={[styles.headline5, styles.content9SpaceBlock]}>
                See all
              </Text>
            </View>
            <View style={[styles.scheduleCard, styles.cardBorder]}>
              <View style={styles.content2}>
                <Text style={[styles.headline6, styles.headline6Typo]}>
                  Monday
                </Text>
              </View>
              <View style={styles.content2}>
                <Text style={[styles.headline7, styles.text1Clr]}>
                  From 8:30 pm - 5:30 pm
                </Text>
              </View>
            </View>
            <View style={[styles.scheduleCard, styles.cardBorder]}>
              <View style={styles.content2}>
                <Text style={[styles.headline6, styles.headline6Typo]}>
                  Tuesday
                </Text>
              </View>
              <View style={styles.content2}>
                <Text style={[styles.headline7, styles.text1Clr]}>
                  From 8:30 pm - 5:30 pm
                </Text>
              </View>
            </View>
            <View style={[styles.scheduleCard, styles.cardBorder]}>
              <View style={styles.content2}>
                <Text style={[styles.headline6, styles.headline6Typo]}>
                  Wednesday
                </Text>
              </View>
              <View style={styles.content2}>
                <Text style={styles.headline11}>From 8:30 pm - 5:30 pm</Text>
              </View>
            </View>
          </View>
          <View style={[styles.section1, styles.sectionSpaceBlock]}>
            <View style={styles.content}>
              <Text style={[styles.headline4, styles.headlineTypo]}>
                <Text style={styles.schedule}>Courses</Text>
                <Text style={styles.text}>(2)</Text>
              </Text>
              <Text style={[styles.headline5, styles.content9SpaceBlock]}>
                See all
              </Text>
            </View>
            <View style={[styles.courseCard, styles.cardBorder]}>
              <View style={styles.content2}>
                <View
                  style={[styles.buildingBlocksmonogram, styles.initialLayout]}
                >
                  <Text style={[styles.initial, styles.initialLayout]}>C</Text>
                </View>
              </View>
              <View style={[styles.content9, styles.content9SpaceBlock]}>
                <Text style={[styles.overline, styles.headlineTypo]}>
                  COMP1205
                </Text>
                <Text style={styles.headline14}>Computing I</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={[styles.extendedFabWrapper, styles.frameParentFlexBox]}>
        <TouchableOpacity
          style={styles.extendedFab}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SessionRequest")}
        >
          <View style={styles.floatingbutton}>
            {/* <Image
              style={styles.pencilIcon}
              contentFit="cover"
              source={require("../assets/pencilicon.png")}
            /> */}
            <Text style={[styles.labelText, styles.headline6Typo]}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainerScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameParentFlexBox: {
    justifyContent: "flex-end",
    position: "absolute",
  },
  textBlockSpaceBlock: {
    padding: Padding.p_xs,
    borderRadius: Border.br_3xs,
  },
  cardFlexBox: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  headlineTypo1: {
    fontFamily: FontFamily.m3LabelMediumProminent,
    lineHeight: 32,
    marginTop: 16,
    textAlign: "center",
  },
  sectionSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    paddingVertical: 0,
  },
  part1Typo: {
    color: Color.materialThemeSysLightPrimary,
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  text1Clr: {
    color: Color.materialThemeRefNeutralNeutral40,
    fontSize: FontSize.materialThemeLabelMedium_size,
  },
  headlineTypo: {
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  cardBorder: {
    marginTop: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  content9SpaceBlock: {
    marginLeft: 16,
    flex: 1,
  },
  headline6Typo: {
    fontSize: FontSize.materialThemeTitleSmall_size,
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  initialLayout: {
    height: 40,
    width: 40,
  },
  arrowLeft2: {
    width: 9,
    height: 16,
  },
  headline: {
    fontSize: FontSize.materialThemeTitleLarge_size,
    lineHeight: 28,
    marginLeft: 6,
    textAlign: "center",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    fontFamily: FontFamily.materialThemeBodyLarge,
    flex: 1,
  },
  selectheader: {
    height: 64,
    paddingHorizontal: Padding.p_7xs,
    alignSelf: "stretch",
  },
  tutorimageIcon: {
    borderRadius: Border.br_36xl,
    width: 100,
    height: 100,
    marginTop: 16,
  },
  headline1: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    alignSelf: "stretch",
  },
  headline2: {
    fontWeight: "600",
    width: 213,
    color: Color.subtleDark,
    fontSize: FontSize.materialThemeLabelMedium_size,
    height: 16,
  },
  selectheaderParent: {
    height: 307,
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  part1: {
    fontSize: FontSize.materialThemeLabelMedium_size,
    textAlign: "center",
  },
  text1: {
    marginTop: 2,
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  logoAndName: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoAndName1: {
    marginLeft: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  segments: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#afb1b6",
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_base,
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
  },
  headline3: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  content: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_mini,
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  hiLindaA: {
    letterSpacing: 0.2,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    color: Color.subtleDark,
    fontFamily: FontFamily.materialThemeBodyLarge,
    alignSelf: "stretch",
  },
  textBlock: {
    backgroundColor: Color.surfaceLight,
    height: 139,
    borderColor: "#afb1b6",
    marginTop: 12,
    padding: Padding.p_xs,
    borderRadius: Border.br_3xs,
  },
  section1: {
    marginTop: 16,
  },
  schedule: {
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  text: {
    color: Color.subtleDark,
  },
  headline4: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
  },
  headline5: {
    textDecoration: "underline",
    textAlign: "right",
    lineHeight: 24,
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    color: Color.materialThemeSysLightPrimary,
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  headline6: {
    textAlign: "left",
    lineHeight: 24,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    alignSelf: "stretch",
  },
  content2: {
    overflow: "hidden",
    justifyContent: "center",
  },
  headline7: {
    textAlign: "left",
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeBodyLarge,
    alignSelf: "stretch",
  },
  scheduleCard: {
    borderRadius: Border.br_8xs,
    justifyContent: "space-between",
    borderColor: "#afb1b6",
    marginTop: 12,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_base,
  },
  headline11: {
    textAlign: "left",
    lineHeight: 24,
    color: Color.subtleDark,
    fontSize: FontSize.materialThemeLabelMedium_size,
    fontFamily: FontFamily.materialThemeBodyLarge,
    alignSelf: "stretch",
  },
  initial: {
    marginTop: -20,
    marginLeft: -20,
    top: "50%",
    left: "50%",
    display: "flex",
    lineHeight: 24,
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    alignItems: "center",
    position: "absolute",
    width: 40,
  },
  buildingBlocksmonogram: {
    borderRadius: Border.br_81xl,
    backgroundColor: "#e8dbcc",
    overflow: "hidden",
  },
  overline: {
    letterSpacing: 1,
    lineHeight: 16,
    color: Color.m3SysLightOnSurfaceVariant,
    textAlign: "left",
    fontSize: FontSize.materialThemeLabelMedium_size,
    alignSelf: "stretch",
  },
  headline14: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    fontFamily: FontFamily.materialThemeBodyLarge,
    alignSelf: "stretch",
  },
  content9: {
    overflow: "hidden",
    justifyContent: "center",
  },
  courseCard: {
    borderColor: "#8c8c8c",
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    marginTop: 12,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_base,
  },
  sectionContainer: {
    marginTop: 19,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    top: 30,
    left: 0,
    width: 390,
    height: 769,
    paddingVertical: 0,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
  },
  pencilIcon: {
    width: 18,
    height: 18,
  },
  labelText: {
    lineHeight: 20,
    color: Color.white,
    marginLeft: 12,
    textAlign: "center",
  },
  floatingbutton: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  extendedFab: {
    borderRadius: Border.br_base,
    backgroundColor: Color.materialThemeSysLightPrimary,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 177,
    overflow: "hidden",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  extendedFabWrapper: {
    top: 1115,
    left: 25,
    width: 340,
    flexDirection: "row",
  },
  tutorPage: {
    backgroundColor: Color.materialThemeSysLightBackground,
    width: "100%",
    height: 1195,
    flex: 1,
  },
});

export default TutorProfileScreen;
