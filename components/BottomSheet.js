import * as React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const BottomSheet = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomSheet}>
      <View style={[styles.frameParent, styles.topAppBarFlexBox]}>
        <View style={styles.topAppBarParent}>
          <View style={[styles.topAppBar, styles.topAppBarFlexBox]}>
            <Pressable
              style={[styles.leadingIcon, styles.iconLayout]}
              onPress={() => navigation.goBack()}
            >
              <View style={[styles.container, styles.buttonFlexBox]}>
                <View style={styles.stateFlexBox}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/iconlylightoutlinearrow--left-2.png")}
                  />
                </View>
              </View>
            </Pressable>
            <Text style={[styles.headline, styles.headlineFlexBox]}>
              Notifications
            </Text>
            <View style={[styles.trailingIcon, styles.iconLayout]}>
              <View style={[styles.container, styles.buttonFlexBox]}>
                <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/iconsaccount-circle-filled-24px.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.section}>
              <Pressable style={styles.listItemlistItem4Densit}>
                <View style={styles.stateLayerOverlay} />
                <View style={styles.stateLayer2}>
                  <View style={styles.content}>
                    <Text style={[styles.overline, styles.textTypo]}>
                      Jaylin Bass
                    </Text>
                    <Text style={[styles.headline1, styles.headlineClr]}>
                      COMP1205
                    </Text>
                    <Text style={[styles.supportingText, styles.textLayout]}>
                      <Text
                        style={styles.requestStatus}
                      >{`Request Status: `}</Text>
                      <Text style={styles.accepted}>Accepted</Text>
                    </Text>
                  </View>
                  <Text
                    style={[styles.trailingSupportingText, styles.textTypo]}
                  >
                    {" "}
                    Session Accepted
                  </Text>
                </View>
                <View style={styles.divider}>
                  <View style={styles.divider1} />
                </View>
              </Pressable>
              <Pressable style={styles.listItemlistItem4Densit1}>
                <View style={styles.stateLayerOverlay} />
                <View style={styles.stateLayer2}>
                  <View style={styles.content}>
                    <Text style={[styles.overline, styles.textTypo]}>
                      Linda Simon
                    </Text>
                    <Text style={[styles.headline1, styles.headlineClr]}>
                      MATH0110
                    </Text>
                    <Text style={[styles.supportingText, styles.textLayout]}>
                      <Text
                        style={styles.requestStatus}
                      >{`Session Status: `}</Text>
                      <Text style={styles.accepted}>Accepted</Text>
                    </Text>
                  </View>
                  <Text
                    style={[styles.trailingSupportingText, styles.textTypo]}
                  >
                    Session Tomorrow
                  </Text>
                </View>
                <View style={styles.divider}>
                  <View style={styles.divider1} />
                </View>
              </Pressable>
              <Pressable style={styles.listItemlistItem4Densit1}>
                <View style={styles.stateLayerOverlay} />
                <View style={styles.stateLayer2}>
                  <View style={styles.content}>
                    <Text style={[styles.overline, styles.textTypo]}>
                      Jaylin Bass
                    </Text>
                    <Text style={[styles.headline1, styles.headlineClr]}>
                      COMP1205
                    </Text>
                    <Text style={[styles.supportingText, styles.textLayout]}>
                      <Text
                        style={styles.requestStatus}
                      >{`Request Status: `}</Text>
                      <Text style={styles.accepted}>Accepted</Text>
                    </Text>
                  </View>
                  <Text
                    style={[styles.trailingSupportingText, styles.textTypo]}
                  >
                    Session Rejected
                  </Text>
                </View>
                <View style={styles.divider}>
                  <View style={styles.divider1} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => {}}
        >
          <View style={styles.stateLayer5}>
            <Text style={[styles.labelText, styles.textLayout]}>Clear All</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topAppBarFlexBox: {
    paddingHorizontal: Padding.p_6xl,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 48,
    width: 48,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  headlineFlexBox: {
    textAlign: "center",
    flex: 1,
  },
  stateFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    color: Color.materialThemeSysLightPrimary,
  },
  headlineClr: {
    color: Color.materialThemeSysLightOnSurface,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    alignSelf: "stretch",
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flexDirection: "row",
  },
  leadingIcon: {
    display: "none",
    justifyContent: "center",
  },
  headline: {
    fontSize: FontSize.materialThemeTitleLarge_size,
    lineHeight: 28,
    marginLeft: 6,
    color: Color.materialThemeSysLightOnSurface,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
  },
  stateLayer1: {
    display: "none",
  },
  trailingIcon: {
    marginLeft: 6,
    display: "none",
    justifyContent: "center",
  },
  topAppBar: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  stateLayerOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    zIndex: 0,
    alignSelf: "stretch",
  },
  overline: {
    fontSize: FontSize.materialThemeLabelMedium_size,
    textAlign: "left",
    color: Color.materialThemeSysLightPrimary,
    lineHeight: 16,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  headline1: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    textAlign: "left",
    alignSelf: "stretch",
  },
  requestStatus: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
  },
  accepted: {
    color: Color.materialThemeSysLightPrimary,
  },
  supportingText: {
    textAlign: "left",
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    fontSize: FontSize.materialThemeLabelLarge_size,
    display: "none",
  },
  content: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  trailingSupportingText: {
    fontSize: FontSize.materialThemeLabelSmall_size,
    textAlign: "right",
    marginLeft: 16,
    color: Color.materialThemeSysLightPrimary,
    lineHeight: 16,
    fontWeight: "500",
  },
  stateLayer2: {
    width: 360,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xl,
    zIndex: 1,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  divider1: {
    borderStyle: "solid",
    borderColor: "#bec9c8",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  divider: {
    zIndex: 2,
    display: "none",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  listItemlistItem4Densit: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.materialThemeSysLightBackground,
  },
  listItemlistItem4Densit1: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.materialThemeSysLightBackground,
  },
  section: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  list: {
    alignSelf: "stretch",
  },
  topAppBarParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  labelText: {
    display: "flex",
    color: Color.materialThemeSysLightPrimary,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stateLayer5: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  button: {
    marginTop: 82,
    flex: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    paddingVertical: Padding.p_26xl,
    alignItems: "center",
  },
  bottomSheet: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 400,
    height: 480,
    maxWidth: "100%",
    maxHeight: "100%",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default BottomSheet;
