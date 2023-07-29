import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const ConfirmSession = ({ onClose }) => {
  return (
    <View style={styles.confirmSession}>
      <View style={[styles.frameParent, styles.listFlexBox]}>
        <View
          style={[styles.listItemlistItem0DensityWrapper, styles.listFlexBox]}
        >
          <View style={[styles.listItemlistItem0Density, styles.listFlexBox]}>
            <View style={styles.stateLayerOverlay} />
            <View style={[styles.stateLayer, styles.stateFlexBox]}>
              <View style={styles.content}>
                <Text style={styles.overline}>Jayden Cross</Text>
                <Text style={styles.headline}>COMP1210</Text>
                <Text style={styles.supportingText}>
                  <Text style={styles.topicMatricesDuration}>{`Topic: Matrices 
Duration: 30min

Additional Comments:


Request Status: `}</Text>
                  <Text style={styles.pending}>Pending</Text>
                </Text>
              </View>
              <Text style={styles.trailingSupportingText}>{`July 21 2023
5:30 PM`}</Text>
              <View style={styles.minHeightFix} />
            </View>
            <View style={styles.divider}>
              <View style={styles.divider1} />
            </View>
          </View>
        </View>
        <View style={styles.buttonParent}>
          <Pressable style={[styles.button, styles.buttonFlexBox]}>
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={[styles.labelText, styles.labelTypo]}>
                Reject Session Request
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.buttonFlexBox]}
            onPress={() => {}}
          >
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={[styles.labelText1, styles.labelTypo]}>
                Accept and Confirm
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  stateFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    height: 50,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    flex: 1,
  },
  stateLayerOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    zIndex: 0,
  },
  overline: {
    fontSize: FontSize.materialThemeLabelMedium_size,
    textAlign: "left",
    color: Color.materialThemeSysLightOnSurfaceVariant,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 16,
    alignSelf: "stretch",
  },
  headline: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    color: Color.materialThemeSysLightPrimary,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  topicMatricesDuration: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
  },
  pending: {
    color: Color.materialThemeSysLightPrimary,
  },
  supportingText: {
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  content: {
    overflow: "hidden",
    flex: 1,
  },
  trailingSupportingText: {
    fontSize: FontSize.materialThemeLabelSmall_size,
    textAlign: "right",
    marginLeft: 16,
    color: Color.materialThemeSysLightOnSurfaceVariant,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 16,
  },
  minHeightFix: {
    backgroundColor: Color.materialThemeSysLightSurface,
    width: 8,
    height: 64,
    opacity: 0,
    marginLeft: 16,
  },
  stateLayer: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    zIndex: 1,
  },
  divider1: {
    borderStyle: "solid",
    borderColor: "#bec9c8",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  divider: {
    display: "none",
    zIndex: 2,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  listItemlistItem0Density: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.materialThemeSysLightBackground,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    alignSelf: "stretch",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flex: 1,
  },
  listItemlistItem0DensityWrapper: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  labelText: {
    color: Color.materialThemeSysLightOnSecondaryContainer,
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
  },
  labelText1: {
    color: Color.materialThemeSysLightOnPrimary,
  },
  button1: {
    backgroundColor: Color.materialThemeSysLightPrimary,
    marginTop: 15,
  },
  buttonParent: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  confirmSession: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    backgroundColor: Color.materialThemeSysLightSurfaceContainerLow,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 8,
    elevation: 8,
    width: 400,
    height: 480,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_26xl,
    justifyContent: "flex-end",
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default ConfirmSession;
