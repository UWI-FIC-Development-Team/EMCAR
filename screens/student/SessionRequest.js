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
import { auth, db } from "../../services/firebaseConfig";
import DropDownPicker from "../../components/DropDownPicker";
import DateAndTimePicker from "../../components/atoms/DateAndTimePicker";
import FormInput from "../../components/atoms/FormInput";
import InfoText from "../../components/atoms/InfoText";
import { SessionContext } from "../../context/RequestContextProvider";
const SessionRequest = () => {
  const navigation = useNavigation()

  const { sendARequest } = useContext(SessionContext);

  const [courseId, setCourseId] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");


  //dummy data for Drop Down Pickers:
  const Topics = [
  { id: "topic1", name: "Algebra" },
  { id: "topic2", name: "Calculus" },
  { id: "topic3", name: "Physics" },
  { id: "topic4", name: "Chemistry" },
  { id: "topic5", name: "Biology" },
  // Add more topics as needed
];

const CourseIDs = [
  { id: "course1", name: "Math101" },
  { id: "course2", name: "Phys101" },
  { id: "course3", name: "Chem101" },
  { id: "course4", name: "Bio101" },
  { id: "course5", name: "CompSci101" },
  // Add more course IDs as needed
];

  


  //TODO: Set values and OnChage handles to each form element. 
  //TODO: populate downdown pickers with dummy data. 
  const [FormListComponents] = useState([
    <DropDownPicker
      data={CourseIDs}
      value={courseId}
      onChange={setCourseId}
      style={styles.container}
      label={"Course ID"}
      placeholder={"Select your course ID"}
    />,
    <DropDownPicker

      data={Topics}
      value={courseId}
      onChange={setCourseId}
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
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
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
     <InfoText/>

      {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}
    <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Specify the behavior prop according to the platform
      >
      <View style={styles.textFieldParent}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={FormListComponents}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.frameFlatListContent}
        />
      </View>
      </KeyboardAvoidingView>
      <PrimaryButton title={"Save & select a tutor"} onPress={()=>{navigation.navigate('Select a tutor')}}/>
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
