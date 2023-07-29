import { useContext, useEffect} from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import FormInput from "../../components/atoms/FormInput";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { AuthContext } from "../../context/AuthContextProvider";
import { useState } from "react";
import { collection, doc, getDoc} from "firebase/firestore";
import TutorDB from "./TutorDB";

const LoginScreen = () => {
  const { login, checkIfUserIsTutor, signOut} = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTutor, setIsTutor] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user.uid);
        // Redirect or navigate to the home screen
      } else {
        console.log("User is signed out");
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
  try {
    // Set the loading state to true before fetching user data
    const userCredential = await login(auth, email, password);

    // Assuming the userCredential contains the user's ID
    const currentUserId = auth.currentUser.uid // Replace userId with the actual path to get the user ID
    const isTutor = await checkIfUserIsTutor(currentUserId)
    if(isTutor === true){
      setEmail('')
      setPassword('')
      navigation.navigate('TutorDB')
    } else{
      setEmail('')
      setPassword('')
      signOut()
      alert('You are not authorized to access this page.')
    }

   
  } catch (error) {
    console.error("Login error:", error.message);
    // Handle login errors, show an error message, etc.
  }
};


  return (
    <View style={styles.loginScreen}>
      <TopBar title={"Log in"} />

      <Text style={[styles.title, styles.titleTypo]}>
        Welcome! Please log into your account
      </Text>

      {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Specify the behavior prop according to the platform
      >
        <View style={styles.textFieldParent}>
          <FormInput
            value={email}
            keyboardType={"email-address"}
            onChangeText={setEmail}
            placeholder="Enter your email"
            label={"Email"}
          />
          <FormInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            label={"Password"}
            secureTextEntry
          />
          <Pressable
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("PasswordReset")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <PrimaryButton title={"Login"} onPress={handleLogin} />
        )}
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
