import React, { Children, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../../GlobalStyles";

const SessionsCard = ({children, title}) => {
  return (
    <View style={styles.section}>
      <Text style={[styles.upcomingSessions, styles.headlineClr]}>
        {title}
      </Text>
    {children}   
    </View>
  );
};

const styles = StyleSheet.create({
  headlineClr: {
    color: Color.materialThemeSysLightOnSurface,
    lineHeight: 24,
  },
  upcomingSessions: {
    fontSize: FontSize.containerHeading_size,
    fontWeight: "700",
    fontFamily: FontFamily.title3,
    textAlign: "center",
    alignSelf: "stretch",
  },
  section: {
    alignSelf: "stretch",
    marginBottom:28
  },
});

export default SessionsCard;
