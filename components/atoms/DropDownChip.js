import React, { memo } from "react";

import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";

const DropDownChip = ({ courseTitle, IconName }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name={IconName} size={24} color="black" />
      <Text style={styles.headline}>{courseTitle}</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.metadata}>June 21 2023 </Text>
        <Text style={styles.metadata}>5:30 PM</Text>
      </View>
      <Feather style={styles.icon} name={"chevron-down"} size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({

  icon: { color: Color.materialThemeSysLightPrimary },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    marginRight: 16,
  },
  headline: {
    flex: 1,
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeTitleLarge,
    color: Color.materialThemeSysLightOnSurface,
    textAlign: "left",
    display: "flex",
    marginLeft: 35,
    alignItems: "center",
  },
  metadata: {
    fontSize: FontSize.materialThemeLabelSmall_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.materialThemeSysLightOnSurfaceVariant,
    textAlign: "right",
    marginLeft: 35,
  },

  container: {
    alignSelf: "stretch",
    backgroundColor: Color.materialThemeSysLightBackground,
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    alignItems: "center",
  },
});

export default DropDownChip;
