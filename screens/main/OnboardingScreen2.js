import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  FontFamily,
  FontSize,
  Color,
  Padding,
} from "../../GlobalStyles";
import AppLogo from "../../components/atoms/AppLogo";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[styles.onboardingScreen2a, styles.topAppBarSpaceBlock]}
    >
      <AppLogo />
      <View
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={styles.connectLearnSucceed}>
          Connect. Learn. Succeed. EMCAR: Your Path to Success!
        </Text>
        <Text style={styles.text}>
          Empower your learning! Are you a curious student or an EMCAR tutor?
        </Text>
      </View>
      <View style={styles.buttonParent}>
        <PrimaryButton
          title="I am a Student"
          onPress={() => {
            navigation.navigate("Sign Up", { role: "student" });
          }}
        />
        <PrimaryButton
          mode="outlined"
          backgroundColor="#fff"
          textColor="black"
          title="I am a Tutor"
          onPress={() => {
            navigation.navigate("Sign Up", { role: "tutor" });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  connectLearnSucceed: {
    letterSpacing: 0.1,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsBold,
    color: Color.normal,
    display: "flex",
    textAlign: "left",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: FontSize.materialThemeHeadlineSmall_size,
    // marginTop: 45,
  },
  onboardingScreen2a: {
    backgroundColor: "#fff",
    paddingVertical: Padding.p_26xl,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    paddingHorizontal: Padding.p_6xl,
    display: "flex",
  },

  vectorParent: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    
  },

  topParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },

  buttonParent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  vectorIcon: {
    width: 241,
    height: 162,
  },
  text: {
    marginTop: 16,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500", // Corrected "fontWweight" to "fontWeight"
    lineHeight: 22.072,
    letterSpacing: 0.124,
    color: "#61646B",
  },
});

export default OnboardingScreen2;
