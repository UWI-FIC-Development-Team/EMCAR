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
      <View style={styles.container}>
        <View style={[styles.content, styles.listSpaceBlock]}>
          {showTitle ? <Text style={styles.headline}>{title}</Text> : ""}
          {showSeeAll ? 
          <TouchableOpacity onPress={onPress}>
          <Text style={styles.headline2}>See all</Text> 
          </TouchableOpacity>
          : ""}
        </View>
        <View style={[styles.list, styles.listSpaceBlock]}>{children}</View>
      </View>
  );
};

const styles = StyleSheet.create({
  listSpaceBlock: {
    paddingHorizontal: 8,
    alignSelf: "stretch",
  },

  headline: {
    textAlign: "left",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
    fontSize: 16,
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
