import React, { useState, useEffect,useContext } from "react";
import { View, Text, Pressable, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import FormInput from "../../components/atoms/FormInput";
import SocialLoginButton from "../../components/atoms/SocialLoginButton";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext} from "../../context/AuthContextProvider";
import { auth } from "../../services/firebaseConfig";



const SignUpScreen = () => {
  const {signUp} = useContext(AuthContext)
  const navigation = useNavigation();

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')



  const handleSignUp = () =>{
    const registerUser = signUp(email, password, name);
    setName('')
    setEmail('')
    setPassword('')
    navigation.navigate('StudentDB')
  }


  return (
    <View style={styles.loginScreen}>
      <Text style={[styles.title, styles.titleTypo]}>
        Let's create your account. Please fill out the following information to get started.
      </Text>

      {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Specify the behavior prop according to the platform
      >
        <View style={styles.textFieldParent}>
          <FormInput 
            onChangeText={setName}
            value={name}
            placeholder="Enter your full name" 
            label={"Full name"} 
          />
          <FormInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            label={"Email"}
            keyboardType={'email-address'}
          />
          <FormInput
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            label={"Password"}
            secureTextEntry
          />
        </View>
        <PrimaryButton
          title={"Register your account"}
          onPress={handleSignUp}
        />
        <Text style={styles.optionText}>OR</Text>
        <SocialLoginButton/>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: Color.materialThemeSysLightBackground,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: Padding.p_6xl,
  },

  signUpButton: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  forgotPassword: {
    marginTop: 3,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#006a6a",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto_medium",
    textDecorationLine: "underline",

  },

  optionText:{
    fontFamily: FontFamily.materialThemeTitleMedium,
    textAlign:"center",
    marginBottom:8
  },
  labelText: {
    color: Color.materialThemeSysLightOnPrimary,
  },
  titleTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    textAlign: "center",
  },
  textFieldParent: {
    marginTop: 64,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  title: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
  },
  frameParent: {
    marginTop: 25,
    // paddingHorizontal: 16,
    alignItems: "center",
  },
  signUpButtonText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto_medium",
    textDecorationLine: "underline",
    color: Color.materialThemeSysLightPrimary,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto_medium",
  },

  // Add a style for the KeyboardAvoidingView
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default SignUpScreen;
