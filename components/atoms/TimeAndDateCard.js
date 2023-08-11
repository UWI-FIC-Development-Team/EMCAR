import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const TimeAndDateCard = () => {
  return (
    <View style={[styles.stateLayerOverlay, styles.contentParentFlexBox]}>
      <View style={styles.content}>
        <Text style={styles.headline}>Monday</Text>
        <Image
          style={styles.mdiArrowDropDownIcon}
          contentFit="cover"
          source={require("../assets/mdi-arrow-drop-down.png")}
        />
      </View>
      <View style={[styles.contentParent, styles.contentParentFlexBox]}>
        <View style={styles.content}>
          <Text style={[styles.headline1, styles.headlineTypo]}>
            From: 11:00 am
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.headline2, styles.headlineTypo]}>
            To: 5:00 pm
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headlineTypo: {
    textAlign: "right",
    color: Color.subtleDark,
    fontFamily: FontFamily.materialThemeBodyLarge,
    fontSize: FontSize.materialThemeLabelMedium_size,
    display: "flex",
    lineHeight: 24,
    alignItems: "center",
  },
  headline: {
    fontSize: FontSize.materialThemeTitleSmall_size,
    fontWeight: "500",
    fontFamily: FontFamily.materialThemeLabelMedium,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    textAlign: "left",
    width: 60,
    display: "flex",
    lineHeight: 24,
    alignItems: "center",
  },
  mdiArrowDropDownIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  headline1: {
    width: 89,
  },
  headline2: {
    width: 82,
  },
  contentParent: {
    width: 193,
  },
  stateLayerOverlay: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 12,
    overflow: "hidden",
  },
});

export default TimeAndDateCard;
