import React, { useState, memo } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";
import SettingSelectChip from "../atoms/SettingSelectChip";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";

const SettingChipContainer = ({ title, children }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.account}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    fontSize: FontSize.containerHeading_size,
    fontWeight: "700",
    fontFamily: FontFamily.title3,
    textAlign: "left",
    color: Color.materialThemeSysLightOnSurface,
    lineHeight: 24,
    alignSelf: "stretch",
  },

  section: {
    marginTop: 20,
    flex: 1,
    width: "100%",
  },
});

export default SettingChipContainer;
