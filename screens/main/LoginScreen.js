import { useContext, useEffect, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";

import { auth } from "../../services/firebaseConfig";
import { AuthContext } from "../../context/AuthContextProvider";
import { ActivityIndicator } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import LoginForm from "../../components/organisms/LoginForm";
import LoadingDialog from "../../components/organisms/LoadingDialog";
// import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ route }) => {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  useEffect(() => {
    // Check if the activeUser is available and not null, then navigate to the "StudentDB" screen
    if (user) {
      setLoading(false);
      navigation.navigate("mainDashboard");
    }
  }, [user]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: !loading,
    });
  }, [navigation, loading]);

  const handleLogin = async (values) => {
    try {
      if (values.password && values.email) {
        // Set the loading state to true before fetching user data
        setLoading(true);
        await login(auth, values.email, values.password);
      } else {
        alert("Please enter login information");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login errors, show an error message, etc.
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <LoadingDialog visible={loading} onDismiss={() => setLoading(false)} />
      ) : (
        <>
          <View style={styles.loginScreen}>
            <KeyboardAwareScrollView>
              <Text style={[styles.title, styles.titleTypo]}>
                Welcome! Please log into your account
              </Text>

              {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}
              <LoginForm onSubmit={handleLogin} />
            </KeyboardAwareScrollView>
          </View>
        </>
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
    height: 25,
  },
  loginScreen: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: Padding.p_6xl,
  },

  forgotPassword: {
    marginBottom: 16,
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

export default LoginScreen;
