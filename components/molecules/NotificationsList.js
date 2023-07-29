import * as React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../../GlobalStyles";

const NotificationsList = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.notificationslist, styles.topAppBarSpaceBlock]}>
      <View style={styles.topAppBarParent}>
        <View style={[styles.topAppBar, styles.topAppBarSpaceBlock]}>
          <Pressable
            style={[styles.leadingIcon, styles.iconLayout]}
            onPress={() => navigation.goBack()}
          >
            <View style={[styles.container, styles.contentFlexBox]}>
              <View style={styles.stateFlexBox}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../../assets/iconlylightoutlinearrow--left-2.png")}
                />
              </View>
            </View>
          </Pressable>
          <Text style={[styles.headline, styles.headlineFlexBox]}>
            Notifications
          </Text>
          <View style={[styles.trailingIcon, styles.iconLayout]}>
            <View style={[styles.container, styles.contentFlexBox]}>
              <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../../assets/iconsaccount-circle-filled-24px.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          style={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listScrollViewContent}
        >
          <View style={styles.section}>
            <Pressable style={styles.listItemlistItem4Densit}>
              <View style={styles.stateLayerOverlay} />
              <View style={styles.stateLayer2}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.overline, styles.overlineTypo]}>
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
                  style={[styles.trailingSupportingText, styles.overlineTypo]}
                >
                  New Session Request!
                </Text>
              </View>
              <View style={styles.divider}>
                <View style={styles.divider1} />
              </View>
            </Pressable>
            <Pressable style={styles.listItemlistItem4Densit1}>
              <View style={styles.stateLayerOverlay} />
              <View style={styles.stateLayer2}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.overline, styles.overlineTypo]}>
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
                  style={[styles.trailingSupportingText, styles.overlineTypo]}
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
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.overline, styles.overlineTypo]}>
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
                  style={[styles.trailingSupportingText, styles.overlineTypo]}
                >
                  New Session Request!
                </Text>
              </View>
              <View style={styles.divider}>
                <View style={styles.divider1} />
              </View>
            </Pressable>
            <Pressable style={styles.listItemlistItem4Densit1}>
              <View style={styles.stateLayerOverlay} />
              <View style={styles.stateLayer2}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.overline3, styles.overlineTypo]}>
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
                  style={[styles.trailingSupportingText, styles.overlineTypo]}
                >
                  Rating Received
                </Text>
              </View>
              <View style={styles.divider}>
                <View style={styles.divider1} />
              </View>
            </Pressable>
          </View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={[styles.button, styles.buttonLayout]}>
              <View style={styles.stateLayer6}>
                <Text style={[styles.labelText, styles.textLayout]}>
                  ClearAll
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topAppBarSpaceBlock: {
    paddingHorizontal: Padding.p_6xl,
    alignItems: "center",
  },
  iconLayout: {
    height: 48,
    width: 48,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  contentFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  headlineFlexBox: {
    textAlign: "center",
    flex: 1,
  },
  stateFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  overlineTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
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
  buttonLayout: {
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    borderRadius: Border.br_81xl,
    alignItems: "center",
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
    height: 64,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
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
    textAlign: "left",
    color: Color.materialThemeSysLightPrimary,
    lineHeight: 16,
    fontWeight: "500",
    fontSize: FontSize.materialThemeLabelMedium_size,
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
    flex: 1,
    alignSelf: "stretch",
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
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xl,
    zIndex: 1,
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
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
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.materialThemeSysLightBackground,
  },
  listItemlistItem4Densit1: {
    marginTop: 12,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.materialThemeSysLightBackground,
  },
  overline3: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
    textAlign: "left",
    lineHeight: 16,
    fontWeight: "500",
    fontSize: FontSize.materialThemeLabelMedium_size,
    alignSelf: "stretch",
    display: "none",
  },
  section: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
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
  stateLayer6: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buttonWrapper: {
    height: 80,
    padding: Padding.p_3xs,
    marginTop: 16,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  list: {
    width: 340,
    maxWidth: 340,
    marginTop: 10,
    flex: 1,
  },
  topAppBarParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  notificationslist: {
    width: 390,
    height: 474,
    paddingVertical: Padding.p_26xl,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default NotificationsList;
