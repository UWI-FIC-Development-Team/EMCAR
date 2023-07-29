import React, { memo } from "react";

import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";

const SessionChip = ({ courseTitle, IconName, studentName }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name={IconName} size={24} color="black" />
      <View style={styles.courseWrapper}>
        <Text style={styles.overline}>{studentName}</Text>
        <Text style={styles.headline}>{courseTitle}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.metadata}>June 21 2023 </Text>
        <Text style={styles.metadata}>5:30 PM</Text>
      </View>
      <Feather
        style={styles.icon}
        name={"chevron-down"}
        size={24}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overline: {
    fontSize: FontSize.m3LabelMedium_size,
    color: Color.materialThemeSysLightOnSurfaceVariant,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
  },
  icon: {
    color: Color.materialThemeSysLightPrimary,
  },

  textWrapper: {
    display: "flex",
    flexDirection: "column",
    marginRight: 16,
  },
  courseWrapper: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal:16
  },
    headline: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeTitleLarge,
    color: Color.materialThemeSysLightOnSurface,
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
    height: 72,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    alignItems: "center",
    borderRadius:12
  },
});

export default SessionChip;
