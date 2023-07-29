import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const RequestSubmitted = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.requestSubmitted}>
      <View style={styles.stateLayerFlexBox}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text
            style={[styles.greatYourRequest, styles.buttonParentLayout]}
          >{`Great! 
Your request to 
[tutor name] 
has been submitted successfully. `}</Text>
        </View>
      </View>
      <View style={[styles.buttonParent, styles.buttonParentLayout]}>
        <TouchableOpacity
          style={[styles.button, styles.buttonFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SessionRequest")}
        >
          <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
            <Text style={[styles.labelText, styles.labelTypo]}>
              Create another request
            </Text>
          </View>
        </TouchableOpacity>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("StudentDB")}
        >
          <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
            <Text style={[styles.labelText1, styles.labelTypo]}>
              Return to Home
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParentLayout: {
    height: 120,
    alignItems: "center",
  },
  buttonFlexBox: {
    overflow: "hidden",
    height: 50,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  stateLayerFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
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
  vectorIcon: {
    width: 113,
    height: 156,
  },
  greatYourRequest: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    color: Color.subtleDark,
    textAlign: "left",
    display: "flex",
    width: 164,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    height: 120,
  },
  vectorParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelText: {
    color: Color.materialThemeSysLightOnSecondaryContainer,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
  },
  button: {
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
  },
  labelText1: {
    color: Color.materialThemeSysLightOnPrimary,
  },
  button1: {
    backgroundColor: Color.materialThemeSysLightPrimary,
    marginTop: 20,
  },
  buttonParent: {
    marginTop: 44,
    height: 120,
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  requestSubmitted: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    backgroundColor: Color.materialThemeSysLightSurfaceContainerLow,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 400,
    height: 480,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_26xl,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default RequestSubmitted;
