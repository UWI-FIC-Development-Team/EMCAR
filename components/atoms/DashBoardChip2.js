import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../../GlobalStyles";

const DashboardChip2 = memo(() => {
  return (
    <View style={[styles.container, styles.contentFlexBox]}>
      <Image
        style={styles.checkIcon}
        resizeMode="cover"
        source={require("../../assets/check.png")}
      />
      <View style={[styles.content, styles.contentFlexBox]}>
        <Text style={[styles.overline, styles.overlineFlexBox]}>
          Kelly Rodney
        </Text>
        <Text style={[styles.headline, styles.overlineFlexBox]}>COMP1205</Text>
      </View>
      <Text style={[styles.trailingSupportingText, styles.overlineTypo]}>
        2 days ago
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  contentFlexBox: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  overlineFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  overlineTypo: {
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
  },
  checkIcon: {
    width: 18,
    height: 13,
  },
  overline: {
    fontSize: FontSize.m3LabelMedium_size,
    letterSpacing: 1,
    color: Color.m3SysLightOnSurfaceVariant,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
  },
  headline: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeTitleLarge,
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  content: {
    overflow: "hidden",
    marginLeft: 16,
  },
  trailingSupportingText: {
    fontSize: FontSize.materialThemeLabelSmall_size,
    color: Color.materialThemeSysLightOnSurfaceVariant,
    textAlign: "right",
    marginLeft: 16,
  },
  container: {
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
    alignItems: "center",
  },
});

export default DashboardChip2;
