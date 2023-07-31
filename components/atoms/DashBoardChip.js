import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TutorCard = ({ onPress, tutorName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.user, styles.userFlexBox]}>
        <View style={[styles.buildingBlocksmonogram, styles.initialLayout]}>
          <Text style={[styles.initial, styles.initialFlexBox]}>K</Text>
        </View>
        <View style={[styles.container, styles.buttonsSpaceBlock]}>
          <View style={styles.content}>
            <View style={styles.userFlexBox}>
              <Text style={styles.text}>Cameron Williamson</Text>
            </View>
            <Text style={styles.subtitle}>Emcar tutor</Text>
          </View>
        </View>
        <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
          <View style={[styles.message, styles.initialFlexBox]}>
            <Feather name="send" size={24} color="#006A6A" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.materialThemeSysLightOnPrimary,
    alignSelf: "stretch",
  },
  initialLayout: {
    height: 40,
    width: 40,
  },
  initialFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsSpaceBlock: {
    marginLeft: 12,
    flexDirection: "row",
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  initial: {
    marginTop: -20,
    marginLeft: -20,
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.materialThemeLabelLarge,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    textAlign: "center",
    display: "flex",
    left: "50%",
    top: "70%",
    position: "absolute",
    height: 40,
    width: 40,
  },
  buildingBlocksmonogram: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.m3LabelMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.darkslategray_500,
    textAlign: "left",
    flex: 1,
  },
  subtitle: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    color: Color.neutral500,
    marginTop: 2,
    textAlign: "left",
    alignSelf: "stretch",
  },
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  icon: {
    marginTop: -15,
    marginLeft: -11.5,
    width: 27,
    height: 27,
    zIndex: 0,
    overflow: "hidden",
  },
  message: {
    backgroundColor: "#ECFDF5",
    width: 40,
    height: 40,
    justifyContent: "center",
    borderRadius: 50,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.materialThemeSysLightOnPrimary,
    marginLeft: 12,
  },
  user: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginBottom: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
  },
});

export default TutorCard;
