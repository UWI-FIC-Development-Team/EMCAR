import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  Border,
  FontFamily,
  Padding,
  Color,
  FontSize,
} from "../../GlobalStyles";

const TopBar2 = ({ userName }) => {
  // const [showLogo, setShowLogo] = useState(true)

  return (
    <View style={styles.topbarGreeting}>
      <View style={styles.greetingHeadline}>
        <Text style={[styles.headline3, styles.headlineFlexBox]}>
          Hi {userName} 👋
        </Text>
        <Text style={[styles.headline2, styles.headlineLayout]}>
          Welcome Back!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbarGreeting: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  topAppBar: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  headline: {
    fontSize: 15,
    fontFamily: FontFamily.m3LabelMediumProminent,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    flex: 1,
  },
  headlineFlexBox: {
    textAlign: "left",
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  headline1: {
    fontSize: FontSize.materialThemeTitleLarge_size,
    marginLeft: 6,
    textAlign: "center",
    fontFamily: FontFamily.materialThemeBodyLarge,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 28,
  },
  iconlylightOutlinenotificatWrapper: {
    justifyContent: "flex-end",
    marginLeft: 6,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  headline2: {
    color: "#64748B",
    fontFamily: FontFamily.materialThemeBodyLarge,
    fontSize: FontSize.materialThemeBodyLarge_size,
    textAlign: "left",
    fontWeight: "500",
  },
  headlineLayout: {
    lineHeight: 24,
    fontSize: FontSize.materialThemeBodyLarge_size,
  },
  headline3: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  iconlylightOutlinenotificat: {
    width: 24,
    height: 24,
  },
});

export default TopBar2;
