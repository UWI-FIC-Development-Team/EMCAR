import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { AuthContext } from "../../context/AuthContextProvider";
import DropDownPicker from "../../components/DropDownPicker";
import DateAndTimePicker from "../../components/atoms/DateAndTimePicker";
import { ScrollView } from "react-native-gesture-handler";
import FormInput from "../../components/atoms/FormInput";

const SessionRequest = () => {
  const { login, checkIfUserIsTutor, signOut } = useContext(AuthContext);

  const [frameFlatListData] = useState([
    <DropDownPicker
      label={"Course ID"}
      placeholder={"Select your course ID"}
    />,
    <DropDownPicker label={"Topic"} placeholder={"Choose your topic"} />,
    <DateAndTimePicker
      placeholder={"Choose a date"}
      mode={"date"}
      label={"Preferred date"}
    />,
    <DateAndTimePicker
      placeholder={"Choose a time"}
      mode={"time"}
      label={"Preferred time"}
    />,
    // <FormInput
    //   label={"Additional Information"}
    //   placeholder={"Add addition information"}
    //   multiline={true}
    // />,
  ]);

  return (
    <View style={styles.loginScreen}>
      <Text style={[styles.title, styles.titleTypo]}>
        Fill out the form to let the tutor know how they can assist you.
      </Text>

      {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Specify the behavior prop according to the platform
      >
        <View style={styles.textFieldParent}>
          <FlatList
            data={frameFlatListData}
            renderItem={({ item }) => item}
            contentContainerStyle={styles.frameFlatListContent}
          />
        </View>
      </KeyboardAvoidingView>

      <PrimaryButton title={"Submit your request"} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlatListContent: {
    flexDirection: "column",
  },
  loginScreen: {
    backgroundColor: Color.materialThemeSysLightBackground,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: Padding.p_6xl,
  },

  titleTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    textAlign: "center",
  },
  textFieldParent: {
    marginTop: 25,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  title: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
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

export default SessionRequest;
