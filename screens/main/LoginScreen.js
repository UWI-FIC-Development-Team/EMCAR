import { useContext, useEffect } from "react";
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
import { auth } from "../../services/firebaseConfig";
import { AuthContext } from "../../context/AuthContextProvider";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = ({ route }) => {
  const { login, activeUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the activeUser is available and not null, then navigate to the "StudentDB" screen
    if (!!activeUser) {
      setLoading(false);
      navigation.navigate("StudentDB");
    }
  }, [activeUser]);

  const handleLogin = async () => {
    try {
      if (password && email) {
        // Set the loading state to true before fetching user data
        setLoading(true);
        await login(auth, email, password);
        setEmail("");
        setPassword("");
      } else {
        alert("Please enter login information");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login errors, show an error message, etc.
    }
  };

  return (
    
      <View style={styles.loginScreen}>
        <KeyboardAwareScrollView>
        <Text style={[styles.title, styles.titleTypo]}>
          Welcome! Please log into your account
        </Text>

        {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}

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
          <ActivityIndicator
            style={{ marginVertical: 16 }}
            animating={true}
            color="#006A6A"
          />
        ) : (
          <PrimaryButton title={"Login"} onPress={handleLogin} />
        )}
        </KeyboardAwareScrollView>
      </View>
  
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: '#fff',
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
