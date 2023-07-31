import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import DashBoardChip from "./DashBoardChip";
import {
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DashBoardCard = ({ title, children, onPress, showTitle, showSeeAll }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.content, styles.listSpaceBlock]}>
          {showTitle ? <Text style={styles.headline}>{title}</Text> : ""}
          {showSeeAll ? <Text style={styles.headline2}>See all</Text> : ""}
        </View>
        <View style={[styles.list, styles.listSpaceBlock]}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listSpaceBlock: {
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
  },

  headline: {
    textAlign: "left",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  headline2: {
    textAlign: "left",
    color: '#006A6A',
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    alignSelf: "stretch",
    textDecorationLine:'underline'
  },
  content: {
    paddingVertical: Padding.p_mini,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  list: {
    flex: 1,
    paddingVertical: 0,
  },
  container: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,

    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    marginTop: 12,
    paddingVertical: 8,
  },
});

export default DashBoardCard;
