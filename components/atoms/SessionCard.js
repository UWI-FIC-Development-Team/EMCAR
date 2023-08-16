import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyles";
import { Divider } from "react-native-paper";

const SessionCard = ({ time, date, location, course, Topic, name }) => {
  // function getFirstLetter(name) {
  //   return name.charAt(0);
  // }

  // const intial = getFirstLetter(name)

  return (
    <View style={[styles.sessionCard, styles.autoLayout]}>
      <View style={styles.timeDate}>
        <Text style={[styles.pm, styles.pmClr]}>{time}</Text>
        <Text style={[styles.april08, styles.april08SpaceBlock]}>{date}</Text>
        <Text style={styles.room207}>{location}</Text>
      </View>
      <Divider style={{ width: 3, height: "100%" }} />
      <View style={styles.headlineContainerWrapper}>
        <View style={styles.headlineContainer}>
          <View style={styles.iconAndHeading}>
            <Text style={[styles.comp1205, styles.initialTypo]}>{course}</Text>
          </View>
          <View style={[styles.iconAndHeading1, styles.april08SpaceBlock]}>
            <Text style={[styles.comp1205, styles.initialTypo]}>{Topic}</Text>
          </View>
          <View style={[styles.headline, styles.april08SpaceBlock]}>
            <View style={styles.initialiconLayout}>
              <View
                style={[
                  styles.buildingBlocksmonogram,
                  styles.initialiconLayout,
                ]}
              >
                <Text style={[styles.initial, styles.initialTypo]}>{"S"}</Text>
              </View>
            </View>
            <Text style={styles.joelBlenman}>{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pmClr: {
    color: Color.black,
    textAlign: "left",
  },
  april08SpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  initialTypo: {
    fontWeight: "500",
    fontSize: FontSize.m3LabelMedium_size,
  },
  initialiconLayout: {
    height: 24,
    width: 24,
  },
  pm: {
    fontWeight: "600",
    fontFamily: FontFamily.sourceCodeProSemiBold,
    textAlign: "left",
    fontSize: FontSize.materialThemeLabelLarge_size,
    alignSelf: "stretch",
  },
  april08: {
    display: "flex",
    color: Color.dimgray_100,
    fontFamily: FontFamily.sourceCodeProRegular,
    marginTop: 8,
    textAlign: "left",
    fontSize: FontSize.materialThemeLabelLarge_size,
  },
  room207: {
    fontSize: FontSize.m3LabelMedium_size,
    marginTop: 8,
    color: Color.dimgray_100,
    fontFamily: FontFamily.sourceCodeProRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  timeDate: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 8,
  },

  comp1205: {
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.black,
  },
  iconAndHeading: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconAndHeading1: {
    flexDirection: "row",
  },
  initial: {
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeLabelLarge,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buildingBlocksmonogram: {
    top: 0,
    left: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: "lightblue",
    position: "absolute",
    overflow: "hidden",
  },
  joelBlenman: {
    fontFamily: FontFamily.interRegular,
    color: Color.darkgray,
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.materialThemeLabelLarge_size,
  },
  headline: {
    width: 129,
    flexDirection: "row",
  },
  headlineContainer: {
    justifyContent: "center",
  },
  headlineContainerWrapper: {
    marginLeft: 8,
  },
  autoLayout: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  sessionCard: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.materialThemeSysLightOnPrimary,
    paddingVertical: 16,
    marginTop: 12,
    alignSelf: "stretch",
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

export default SessionCard;
