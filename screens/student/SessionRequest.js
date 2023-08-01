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
  const navigation = useNavigation()

  const [frameFlatListData] = useState([
    <DropDownPicker
      style={styles.container}
      label={"Course ID"}
      placeholder={"Select your course ID"}
    />,
    <DropDownPicker
      style={styles.container}
      label={"Topic"}
      placeholder={"Choose your topic"}
    />,
    <DateAndTimePicker
      placeholder={"Choose a date"}
      mode={"date"}
      label={"Date"}
    />,
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <DropDownPicker
        style={styles.inputSmall}
        placeholder={"Pick a time"}
        mode={"time"}
        label={"Start time"}
      />

      <DropDownPicker
        style={styles.inputSmall}
        placeholder={"Pick a time"}
        mode={"time"}
        label={"End time"}
      />
    </View>,
   
      <FormInput
        multiline={true}
        style={styles.textInput}
        label={"Additional Info"}
        placeholder={
          "Enter a brief summary of what you want to learn or improve in this session"
        }
      />
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
        showsVerticalScrollIndicator={false}
          data={frameFlatListData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.frameFlatListContent}
        />
      </View>
      </KeyboardAvoidingView>
      <PrimaryButton title={"Save & select a tutor"} onPress={()=>{navigation.navigate('option Screen')}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  //form styles
  container: {
    flexDirection: "column",
    flex: 1,
    marginBottom: 8,
  },

  inputSmall: {
    width: "45%",
  },
  textInput: {
    height: 140,
  },

  //container styles

  frameFlatListContent: {
    flexDirection: "column",
  },
  loginScreen: {
    backgroundColor: "#fff",
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

  // Add a style for the KeyboardAvoidingView
  keyboardAvoidingView: {
    flex: 1,
    paddingBottom:20
  },
});

export default SessionRequest;
