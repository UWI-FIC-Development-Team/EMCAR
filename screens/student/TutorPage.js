import * as React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color, FontSize, FontFamily } from "../../GlobalStyles";

const TutorPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tutorPage}>
      <View style={styles.topAppBarWrapper}>
        <ImageBackground
          style={styles.topAppBar}
          resizeMode="cover"
          source={require("../../assets/topappbar.png")}
        >
          <TouchableOpacity
            style={styles.iconLayout}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TutorSelect")}
          >
            <View style={[styles.container, styles.containerLayout]}>
              <View style={styles.stateFlexBox}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../../assets/iconlylightoutlinearrow--left-2.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.headline}>Linda Simon</Text>
          <View style={[styles.trailingIcon, styles.iconLayout]}>
            <View style={[styles.container, styles.containerLayout]}>
              <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../../assets/iconsaccount-circle-filled-24px.png")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.buildingBlocksimageThumbnaiParent}>
          <ImageBackground
            style={styles.buildingBlocksimageThumbnaiIcon}
            resizeMode="cover"
            source={require("../../assets/buildingblocksimagethumbnail1.png")}
          />
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon, styles.initialPosition]}
              contentFit="cover"
              source={require("../../assets/vector1.png")}
            />
            <Text style={styles.headline1}>Linda Simon</Text>
            <Text style={[styles.headline2, styles.headlineFlexBox]}>(15)</Text>
            <Text style={[styles.headline3, styles.headlineFlexBox]}>|</Text>
            <Text style={[styles.headline4, styles.overlineTypo]}>
              Sessions 5
            </Text>
          </View>
        </View>
        <ScrollView
          style={styles.onlineTutorCardParent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={[styles.onlineTutorCard, styles.listDialogBg]}>
            <Text style={[styles.about, styles.headlineLayout]}>About</Text>
            <View style={[styles.orderRequest, styles.orderSpaceBlock]}>
              <View
                style={[
                  styles.lindaIsAVisionaryEntreprenWrapper,
                  styles.mondayWednesdayFridayParentFlexBox,
                ]}
              >
                <Text style={[styles.lindaIsAContainer, styles.supportingTypo]}>
                  <Text style={styles.lindaIsAContainer1}>
                    <Text
                      style={styles.lindaIsA}
                    >{`Linda is a visionary entrepreneur who builds successful businesses from .... `}</Text>
                    <Text style={styles.readMore}>Read more</Text>
                  </Text>
                </Text>
              </View>
            </View>
            <Text style={[styles.hours, styles.orderSpaceBlock]}>Hours</Text>
            <View style={[styles.orderRequest1, styles.orderSpaceBlock]}>
              <View
                style={[
                  styles.mondayWednesdayFridayParent,
                  styles.mondayWednesdayFridayParentFlexBox,
                ]}
              >
                <Text
                  style={[styles.mondayWednesdayFriday, styles.supportingTypo]}
                >{`Monday
Wednesday
Friday`}</Text>
                <Text
                  style={[styles.mondayWednesdayFriday, styles.supportingTypo]}
                >{`5 - 7 PM
4 - 6 PM
3 - 4 PM`}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.listDialog, styles.listDialogBg]}>
            <View style={styles.content}>
              <Text style={[styles.headline5, styles.headlineLayout]}>
                Classes
              </Text>
              <Text style={[styles.supportingText, styles.supportingClr]} />
            </View>
            <View style={[styles.list, styles.listSpaceBlock]}>
              <View style={styles.listItem1}>
                <View style={styles.statePosition1}>
                  <View style={styles.stateLayer2} />
                </View>
                <View style={[styles.stateLayer3, styles.statePosition]}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.initialLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialLayout]}>
                        M
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content1}>
                    <Text style={[styles.overline, styles.overlineFlexBox]}>
                      MATH0110
                    </Text>
                    <Text style={[styles.headline6, styles.headlineLayout]}>
                      Calculus and Analytical Geometry
                    </Text>
                    <Text
                      style={[styles.supportingText1, styles.overlineFlexBox]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.trailingSupportingText,
                      styles.supportingClr,
                    ]}
                  >
                    2 days ago
                  </Text>
                </View>
                <View style={[styles.divider, styles.listSpaceBlock]}>
                  <View style={styles.divider1} />
                </View>
              </View>
              <View style={styles.listItem2}>
                <View style={styles.statePosition1}>
                  <View style={styles.stateLayer2} />
                </View>
                <View style={[styles.stateLayer5, styles.statePosition]}>
                  <View style={styles.leadingElement1}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.initialLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialLayout]}>
                        C
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <Text style={[styles.overline, styles.overlineFlexBox]}>
                      COMP1205
                    </Text>
                    <Text style={[styles.headline6, styles.headlineLayout]}>
                      Computing I
                    </Text>
                    <Text
                      style={[styles.supportingText1, styles.overlineFlexBox]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.trailingSupportingText,
                      styles.supportingClr,
                    ]}
                  >
                    5 days ago
                  </Text>
                </View>
                <View style={[styles.divider, styles.listSpaceBlock]}>
                  <View style={styles.divider1} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={[styles.divider4, styles.dividerPosition]} />
      <View style={[styles.divider5, styles.dividerPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerLayout: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  iconLayout: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  stateFlexBox: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  initialPosition: {
    left: "50%",
    position: "absolute",
  },
  headlineFlexBox: {
    height: 12,
    display: "flex",
    textAlign: "left",
    position: "absolute",
    color: Color.materialThemeSysLightOnSurface,
    alignItems: "center",
  },
  overlineTypo: {
    fontSize: FontSize.materialThemeLabelMedium_size,
    lineHeight: 16,
  },
  listDialogBg: {
    backgroundColor: Color.materialThemeSysLightSurfaceContainer,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  headlineLayout: {
    lineHeight: 24,
    fontSize: FontSize.materialThemeTitleMedium_size,
  },
  orderSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  mondayWednesdayFridayParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  supportingTypo: {
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
  },
  supportingClr: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
    display: "none",
  },
  listSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  statePosition: {
    paddingRight: Padding.p_5xl,
    paddingLeft: Padding.p_base,
    zIndex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  initialLayout: {
    height: 40,
    width: 40,
  },
  overlineFlexBox: {
    color: Color.m3SysLightOnSurfaceVariant,
    textAlign: "left",
    alignSelf: "stretch",
  },
  dividerPosition: {
    width: 276,
    marginLeft: -137.5,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#bec9c8",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: 24,
    width: 24,
  },
  container: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    marginLeft: 6,
    display: "none",
    textAlign: "center",
    color: Color.materialThemeSysLightOnSurface,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    lineHeight: 28,
    fontSize: FontSize.materialThemeTitleLarge_size,
    flex: 1,
  },
  stateLayer1: {
    display: "none",
  },
  trailingIcon: {
    marginLeft: 6,
  },
  topAppBar: {
    height: 180,
    paddingVertical: 58,
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_6xl,
  },
  topAppBarWrapper: {
    width: 390,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buildingBlocksimageThumbnaiIcon: {
    borderRadius: Border.br_36xl,
    width: 100,
    height: 107,
    flexDirection: "row",
  },
  vectorIcon: {
    marginLeft: -103,
    top: 30,
    width: 75,
    height: 11,
  },
  headline1: {
    bottom: 15,
    left: 0,
    width: 139,
    textAlign: "left",
    position: "absolute",
    color: Color.materialThemeSysLightOnSurface,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    lineHeight: 28,
    fontSize: FontSize.materialThemeTitleLarge_size,
  },
  headline2: {
    left: 80,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.materialThemeLabelSmall_size,
    bottom: 1,
    height: 12,
    width: 24,
  },
  headline3: {
    left: 105,
    width: 8,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.materialThemeLabelSmall_size,
    bottom: 1,
    height: 12,
  },
  headline4: {
    bottom: 0,
    left: 113,
    width: 93,
    height: 12,
    display: "flex",
    textAlign: "left",
    position: "absolute",
    color: Color.materialThemeSysLightOnSurface,
    alignItems: "center",
    fontFamily: FontFamily.materialThemeHeadlineSmall,
  },
  vectorParent: {
    width: 206,
    height: 43,
    marginTop: 6,
  },
  buildingBlocksimageThumbnaiParent: {
    paddingLeft: 30,
    alignSelf: "stretch",
  },
  about: {
    color: Color.normal,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    textAlign: "left",
    alignSelf: "stretch",
    flex: 1,
  },
  lindaIsA: {
    color: Color.normal,
  },
  readMore: {
    color: Color.materialThemeSysLightPrimary,
  },
  lindaIsAContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  lindaIsAContainer: {
    width: 279,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  lindaIsAVisionaryEntreprenWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
  },
  orderRequest: {
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_8xs,
    marginTop: 16,
    paddingHorizontal: Padding.p_sm,
    flex: 1,
  },
  hours: {
    color: Color.normal,
    lineHeight: 24,
    fontSize: FontSize.materialThemeTitleMedium_size,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
  mondayWednesdayFriday: {
    width: 84,
    color: Color.normal,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  mondayWednesdayFridayParent: {
    height: 68,
  },
  orderRequest1: {
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_8xs,
    marginTop: 16,
    paddingHorizontal: Padding.p_sm,
  },
  onlineTutorCard: {
    height: 251,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_mini,
  },
  headline5: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.materialThemeSysLightOnSurface,
    alignSelf: "stretch",
  },
  supportingText: {
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    marginTop: 16,
    alignSelf: "stretch",
    textAlign: "left",
  },
  content: {
    paddingVertical: 7,
    paddingHorizontal: Padding.p_sm,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  stateLayer2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  statePosition1: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.materialThemeSysLightSurfaceContainerLow,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
    zIndex: 0,
    width: "100%",
  },
  initial: {
    marginTop: -20,
    marginLeft: -20,
    top: "50%",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
    fontSize: FontSize.materialThemeTitleMedium_size,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
  },
  buildingBlocksmonogram: {
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    overflow: "hidden",
    borderRadius: Border.br_81xl,
  },
  leadingElement: {
    height: 64,
  },
  overline: {
    letterSpacing: 1,
    fontSize: FontSize.materialThemeLabelMedium_size,
    lineHeight: 16,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
  },
  headline6: {
    textAlign: "left",
    color: Color.materialThemeSysLightOnSurface,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    alignSelf: "stretch",
  },
  supportingText1: {
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    display: "none",
  },
  content1: {
    marginLeft: 16,
    overflow: "hidden",
    flex: 1,
  },
  trailingSupportingText: {
    textAlign: "right",
    marginLeft: 16,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.materialThemeLabelSmall_size,
  },
  stateLayer3: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_xs,
  },
  divider1: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#bec9c8",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  divider: {
    paddingHorizontal: Padding.p_base,
    zIndex: 2,
    display: "none",
    justifyContent: "center",
  },
  listItem1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  leadingElement1: {
    overflow: "hidden",
    justifyContent: "center",
  },
  content2: {
    marginLeft: 16,
    overflow: "hidden",
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  stateLayer5: {
    height: 56,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  listItem2: {
    marginTop: 7,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    height: 170,
    paddingHorizontal: Padding.p_sm,
  },
  listDialog: {
    alignItems: "flex-end",
    marginTop: 20,
    overflow: "hidden",
  },
  onlineTutorCardParent: {
    marginTop: 19,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    marginTop: -70,
    zIndex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    flex: 1,
  },
  divider4: {
    top: 345,
    zIndex: 2,
  },
  divider5: {
    top: 435,
    zIndex: 3,
  },
  tutorPage: {
    backgroundColor: Color.materialThemeSysLightBackground,
    height: 844,
    paddingBottom: Padding.p_26xl,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: Padding.p_6xl,
    width: "100%",
    flex: 1,
  },
});

export default TutorPage;
