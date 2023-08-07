import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import FormInput from "../../components/atoms/FormInput";
import { AuthContext } from "../../context/AuthContextProvider";
import { auth } from "../../services/firebaseConfig";
import { ActivityIndicator } from "react-native-paper";

const TutorSignUpScreen = () => {
  const { createTutorAccount, activeUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the activeUser is available and not an empty string, then navigate to the "StudentDB" screen
    if (!!activeUser) {
      navigation.navigate("Log In");
    }
  }, [activeUser, navigation]);

  const handleSignUp = async () => {
    try {
      if (name && email && password) {
        setLoading(true); // Set loading state to true before sign-up
        // Call the signUp function and await its completion
        await signUp(email, password, name);

        // Reset the input fields and loading state after successful sign-up
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");

        // The navigation to "StudentDB" will happen automatically when useEffect is triggered
      } else {
        alert("Please fill in all the required fields");
      }
    } catch (error) {
      console.error("Sign up error:", error.message);
      setLoading(false); // Set loading state to false in case of sign-up error
      // Handle sign up errors, show an error message, etc.
    }
  };

  return (
    <View style={styles.loginScreen}>
      <Text style={[styles.title, styles.titleTypo]}>
        Let's create your account. Please fill out the following information to
        get started.
      </Text>

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            keyboardType={"email-address"}
          />
          <FormInput
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            label={"Password"}
            secureTextEntry
          />
        </View>
        {loading ? (
          <ActivityIndicator style={{marginVertical:16}} animating={true} color="#0000ff" />
        ) : (
          <PrimaryButton
            title={"Register your account"}
            onPress={handleSignUp}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: Color.materialThemeSysLightBackground,
    flex: 1,
    paddingTop: 20,
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

  optionText: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    textAlign: "center",
    marginBottom: 8,
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
    marginTop: 40,
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

export default TutorSignUpScreen;
