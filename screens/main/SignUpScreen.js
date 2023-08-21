import React, { useState, useContext, useLayoutEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import SocialLoginButton from "../../components/atoms/SocialLoginButton";
import { AuthContext } from "../../context/AuthContextProvider";
import { ActivityIndicator } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignUpForm from "../../components/organisms/SignUpFrom";

const SignUpScreen = ({ route }) => {
  const { role } = route.params;
  const { createStudentAccount, createTutorAccount } = useContext(AuthContext);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: !loading,
    });
  }, [navigation, loading]);

  const handleSignUp = async (values) => {
    try {
      if (values.name && values.email && values.password) {
        setLoading(true);
        if (role === "tutor") {
          // Call the signUp function and await its completion
          await createTutorAccount(values.email, values.password, values.name);
        } else {
          // Call the signUp function and await its completion
          await createStudentAccount(
            values.email,
            values.password,
            values.name
          );

          navigation.navigate("Log In");
        }

        // Reset the input fields and loading state after successful sign-up
        setLoading(false);
        navigation.navigate("Log In");
        values.name("");
        values.email("");
        values.password("");

        // The navigation to "StudentDB" will happen automatically when useEffect is triggered
      }
    } catch (error) {
      console.error("Sign up error:", error.message);
      setLoading(false); // Set loading state to false in case of sign-up error
      // Handle sign up errors, show an error message, etc.
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.activityIndicatorContainer}>
          <Text style={styles.activityIndicatorGroupText}>
            Signing you up! Please wait
          </Text>
          <ActivityIndicator animating color="#006A6A" />
        </View>
      ) : (
        <View style={styles.loginScreen}>
          <KeyboardAwareScrollView>
            <Text style={[styles.title, styles.titleTypo]}>
              Let's create your account. Please fill out the following
              information to get started.
            </Text>

            <SignUpForm onSubmit={handleSignUp} />
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorGroupText: {
    color: "#006a6a",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto_medium",
    marginBottom: 12,
  },
  activityIndicatorContainer: {
    flex: 1, // Center the content both vertically and horizontally
    justifyContent: "center",
    alignItems: "center",
  },
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
