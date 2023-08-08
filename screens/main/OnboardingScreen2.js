import * as React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import AppLogo from "../../components/atoms/AppLogo";
import PrimaryButton from "../../components/atoms/PrimaryButton";

const OnboardingScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.onboardingScreen2a, styles.topAppBarSpaceBlock]}>
      <AppLogo/>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../assets/vector.png")}
        />
      </View>
        <Text
          style={styles.connectLearnSucceed}>Empower your learning! 
        Are you a curious student or an EMCAR tutor?
        </Text>
        <View style={styles.buttonParent}>
          <PrimaryButton title={'Student'} onPress={()=>{navigation.navigate('Sign Up', {role:'student'})}}/>
          <PrimaryButton title={'Emcar Tutor'} onPress={()=>{navigation.navigate('Sign Up',{ role:'tutor'})}}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
   onboardingScreen2a: {
    backgroundColor: Color.materialThemeSysLightBackground,
    paddingVertical: Padding.p_26xl,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  topAppBarSpaceBlock: {
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
  },
  vectorParent: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent:'center',
    flex: 1,
    marginTop:40
  },

  topParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
 
  buttonParent: {
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
    
  },
 
  vectorIcon: {
    width: 241,
    height: 162,
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
    fontSize: 20,
    marginTop: 45,
    }, 

});

export default OnboardingScreen2;
