import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";

const SessionCard = ({time, data, room, courseCode, Topic, tutor}) => {
  return (
    <View style={styles.sessionCard}>
      <View style={styles.autoLayout}>
        <View style={styles.timeDate}>
          <Text style={[styles.pm, styles.pmClr]}>12:00 PM</Text>
          <Text style={[styles.april08, styles.april08SpaceBlock]}>
            April, 08
          </Text>
          <Text style={styles.room207}>Room 207</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.headlineContainerWrapper}>
          <View style={styles.headlineContainer}>
            <View style={styles.iconAndHeading}>
              <Text style={[styles.comp1205, styles.initialTypo]}>
                COMP1205
              </Text>
            </View>
            <View style={[styles.iconAndHeading1, styles.april08SpaceBlock]}>
              <Text style={[styles.comp1205, styles.initialTypo]}>
                Object Oriented Programming
              </Text>
            </View>
            <View style={[styles.headline, styles.april08SpaceBlock]}>
              <View style={styles.initialiconLayout}>
                <View
                  style={[
                    styles.buildingBlocksmonogram,
                    styles.initialiconLayout,
                  ]}
                >
                  <Text style={[styles.initial, styles.initialTypo]}>
                    J
                  </Text>
                </View>
              </View>
              <Text style={styles.joelBlenman}>Joel Blenman</Text>
            </View>
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
    width: 76,
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
    alignItems: "center",
  },
  divider: {
    backgroundColor: Color.gainsboro,
    width: 4,
    height: 64,
    marginLeft: 8,
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
    backgroundColor: 'lightblue',
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
    paddingHorizontal:16
  },
  sessionCard: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.materialThemeSysLightOnPrimary,
    paddingVertical: 16,
    marginTop: 12,
    alignSelf: "stretch",
    shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
  },
});

export default SessionCard;
