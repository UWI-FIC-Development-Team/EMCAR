import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import FormInput from "../../components/atoms/FormInput";
import SocialLoginButton from "../../components/atoms/SocialLoginButton";
import { AuthContext } from "../../context/AuthContextProvider";
import { ActivityIndicator } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpScreen = ({ route }) => {
  const { role } = route.params;
  const { createStudentAccount, activeUser, createTutorAccount } =
    useContext(AuthContext);
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      if (name && email && password) {
        setLoading(true);
        if (role === "tutor") {
          // Call the signUp function and await its completion
          await createTutorAccount(email, password, name);
        } else {
          // Call the signUp function and await its completion
          await createStudentAccount(email, password, name);
        }

        // Reset the input fields and loading state after successful sign-up
        setLoading(false);
        navigation.navigate("Log In");
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

  const keyboardVerticalOffset = Platform.OS === "ios" ? 1 : 0;

  return (
    <View style={styles.loginScreen}>
      <KeyboardAwareScrollView>
        <Text style={[styles.title, styles.titleTypo]}>
          Let's create your account. Please fill out the following information
          to get started.
        </Text>

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
          <ActivityIndicator animating={true} size={"large"} color="#006A6A" />
        ) : (
          <PrimaryButton
            title={"Register your account"}
            onPress={handleSignUp}
          />
        )}
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Log In")}
        >
          <Text style={styles.signUpText}>Already have an account? </Text>
          <Text style={styles.signUpButtonText}>Log In</Text>
        </Pressable>
        <Text style={styles.optionText}>OR</Text>
        <SocialLoginButton />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: Padding.p_6xl,
  },

  signUpButton: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 8,
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

export default SignUpScreen;
