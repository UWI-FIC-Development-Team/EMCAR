import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";

const CourseCard = ({ courseName }) => {
  function getFirstCharacter(str) {
    return str.substring(0, 1);
  }

  const intital = getFirstCharacter(courseName);
  return (
    <View style={styles.courseCard}>
      <View style={styles.leadingElement}>
        <View style={[styles.buildingBlocksmonogram, styles.initialLayout]}>
          <Text style={[styles.initial, styles.initialClr]}>{intital}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.headline, styles.initialClr]}>Computing I</Text>
      </View>
      <Feather name="x" size={24} color="black" />
    </View>
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
    fontSize: 16,
  },
  initial: {
    position: "absolute",
    marginTop: -20,
    marginLeft: -20,
    top: "50%",
    left: "50%",
    fontWeight: "500",
    fontFamily: FontFamily.materialThemeLabelMedium,
    textAlign: "center",
    display: "flex",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buildingBlocksmonogram: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    overflow: "hidden",
  },
  leadingElement: {
    justifyContent: "center",
    overflow: "hidden",
  },
  headline: {
    fontFamily: FontFamily.materialThemeBodyLarge,
    textAlign: "left",
    alignSelf: "stretch",
  },
  content: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
    overflow: "hidden",
  },
  iconsclose24px: {
    width: 16,
    height: 16,
    marginLeft: 16,
  },
  courseCard: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#8c8c8c",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 12,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default CourseCard;
