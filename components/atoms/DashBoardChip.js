import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DashBoardChip = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.stateLayerOverlay}>
      <View style={[styles.buildingBlocksmonogram, styles.initialLayout]}>
        <Text style={[styles.initial, styles.initialClr]}>K</Text>
      </View>
      <Text style={[styles.headline, styles.initialClr]}>Kelly Rodney</Text>
      <Text style={[styles.trailingSupportingText, styles.initialTypo]}>
        2 days ago
      </Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  initialLayout: {
    height: 40,
    width: 40,
  },
  initialClr: {
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
  },
  initialTypo: {
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
  },
  initial: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -20,
    top: "50%",
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    height: 40,
    width: 40,
  },
  buildingBlocksmonogram: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    overflow: "hidden",
  },
  headline: {
    fontFamily: FontFamily.materialThemeBodyMedium,
    textAlign: "left",
    marginLeft: 16,
    flex: 1,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
  },
  trailingSupportingText: {
    fontSize: FontSize.materialThemeLabelSmall_size,
    lineHeight: 16,
    color: Color.materialThemeSysLightOnSurfaceVariant,
    textAlign: "right",
    marginLeft: 16,
  },
  stateLayerOverlay: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.materialThemeSysLightBackground,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    marginBottom:16,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    height:64
  },
});

export default DashBoardChip;
