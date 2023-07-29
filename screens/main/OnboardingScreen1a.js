import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import AppLogo from "../../components/atoms/AppLogo";

const OnboardingScreen1a = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={[styles.onboardingScreen1a, styles.topAppBarSpaceBlock]}>
      <AppLogo/>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../assets/vector4.png")}
        />
        <Text style={styles.connectLearnSucceed}>
          Connect. Learn. Succeed. EMCAR: Your Path to Success!
        </Text>
        <View style={styles.buttonParentFlexBox}>
          <PrimaryButton 
          onPress={()=>{navigation.navigate("OnboardingScreen2")}} 
          title={"Let's get started"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topAppBarSpaceBlock: {
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
  },
 
  buttonParentFlexBox: {
    marginTop: 45,
    justifyContent:'center',
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },

  vectorIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 236,
    alignSelf: "stretch",
    width: "100%",
  },
  connectLearnSucceed: {
    letterSpacing: 0.1,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsBold,
    color: Color.normal,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: FontSize.materialThemeHeadlineSmall_size,
    marginTop: 45,
    },
 
  vectorParent: {
    marginTop: 44,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  onboardingScreen1a: {
    backgroundColor: Color.materialThemeSysLightBackground,
    paddingVertical: Padding.p_26xl,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default OnboardingScreen1a;
