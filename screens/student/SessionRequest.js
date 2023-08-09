import { useContext } from "react";
import { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { auth } from "../../services/firebaseConfig";
import { CourseDropDown, TopicDropDown } from "../../components/DropDownPicker";
import {
  DatePicker,
  TimePicker,
} from "../../components/atoms/DateAndTimePicker";
import FormInput from "../../components/atoms/FormInput";
import InfoText from "../../components/atoms/InfoText";
import { SessionContext } from "../../context/RequestContextProvider";
import { ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContextProvider";
import uuid from 'react-native-uuid';

const SessionRequest = () => {
  const navigation = useNavigation();

  const { setSessionRequest } = useContext(SessionContext);
  const { activeUser } = useContext(AuthContext);
  // get the current user logged in by ID
  const currentUserID = auth.currentUser.uid;
  const [courseId, setCourseId] = useState([]);
  const [topic, setTopic] = useState([]);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date(Date.now()));
  const [endTime, setEndTime] = useState(new Date(Date.now()));
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [loading, setLoading] = useState(false);


  const handleStartTimeChange = (event, selectedDate) => {
    if (selectedDate) {
      setStartTime(selectedDate);
    }
  };

  const handleEndTimeChange = (event, selectedDate) => { 
    if (selectedDate) {
      setEndTime(selectedDate);
    }
  };
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

 
  const handleSendRequest = async () => {
    const userId = auth.currentUser.uid;
    // Example request data
    const requestData = {
      requestId:requestId,
      studentId: userId,
      studentName: activeUser, // Assuming the user is a student and has a UID
      tutorId: "", // The UID of the tutor to whom the request is sent
      tutorName: "",
      subjects: courseId,
      topics: topic,
      requestDate: date,
      startTime: startTime,
      endTime: endTime,
      location: "",
      additionalDetails: additionalInfo,
    };

    try {
      // keep a copy of the object with state
      setSessionRequest((prev) => {
        console.log("This is the prev data:", prev);
        console.log("This is the new data:", requestData);
        return { ...prev, ...requestData };
      });
      navigation.navigate("Select a tutor");
      console.log("next request");
    } catch (error) {
      console.error("Error while sending request:", error.message);
    }
  };

  const FormListComponents = [
    <CourseDropDown
      value={courseId}
      onChange={(item) => setCourseId(item)}
      style={styles.container}
      label={"Course ID"}
      placeholder={"Select your course ID"}
    />,
    <TopicDropDown
      value={topic}
      onChange={(item) => setTopic(item)}
      style={styles.container}
      label={"Topic"}
      placeholder={"Choose your topic"}
    />,
    <DatePicker
      date={date}
      handleDateChange={handleDateChange}
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
      <TimePicker
        time={startTime}
        handleTimeChange={handleStartTimeChange}
        placeholder={"Pick a time"}
        mode={"time"}
        label={"Start time"}
      />

      <TimePicker
        time={endTime}
        handleTimeChange={handleEndTimeChange}
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
    />,
  ];

  return (
    <View style={styles.loginScreen}>
      <InfoText />

      {/* Wrap the content that needs to be adjusted inside a KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Specify the behavior prop according to the platform
      >
        <ScrollView>
          <View style={styles.textFieldParent}>
            {FormListComponents.map((items, index) => {
              return items;
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <PrimaryButton
        title={"Save & select a tutor"}
        onPress={handleSendRequest}
      />
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
    paddingBottom: 20,
  },
});

export default SessionRequest;
