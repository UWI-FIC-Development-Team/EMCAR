import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../../GlobalStyles";

const SessionStatusBar = () => {
  return (
    <View style={styles.segments}>
      <View style={styles.logoFlexBox}>
        <Text style={[styles.part1, styles.part1Typo]}>3</Text>
        <Text style={[styles.text1, styles.part1Typo]}>courses</Text>
      </View>
      <View style={[styles.logoAndName1, styles.logoFlexBox]}>
        <Text style={[styles.part1, styles.part1Typo]}>4</Text>
        <Text style={[styles.text1, styles.part1Typo]}>on going</Text>
      </View>
      <View style={[styles.logoAndName1, styles.logoFlexBox]}>
        <Text style={[styles.part1, styles.part1Typo]}>2</Text>
        <Text style={[styles.text1, styles.part1Typo]}>completed</Text>
      </View>
      <View style={[styles.logoAndName1, styles.logoFlexBox]}>
        <Text style={[styles.part1, styles.part1Typo]}>1</Text>
        <Text style={[styles.text1, styles.part1Typo]}>not started</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  part1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    fontSize: FontSize.materialThemeLabelMedium_size,
  },
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  part1: {
    color: Color.materialThemeSysLightPrimary,
  },
  text1: {
    color: Color.materialThemeRefNeutralNeutral40,
    marginTop: 2,
  },
  logoAndName1: {
    marginLeft: 32,
  },
  segments: {
    borderRadius: 5,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#afb1b6",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default SessionStatusBar;
