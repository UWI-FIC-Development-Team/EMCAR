import { useContext, useEffect } from "react";
import { useState } from "react";
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
import {
  CourseDropDown,
  TimeDropDown,
  TopicDropDown,
} from "../../components/DropDownPicker";
import DateAndTimePicker from "../../components/atoms/DateAndTimePicker";
import FormInput from "../../components/atoms/FormInput";
import InfoText from "../../components/atoms/InfoText";
import { SessionContext } from "../../context/RequestContextProvider";
import { ScrollView } from "react-native";

const SessionRequest = () => {
  const navigation = useNavigation();

  const { sendARequest } = useContext(SessionContext);

  const [courseId, setCourseId] = useState([]);
  const [topic, setTopic] = useState([]);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleOpenDatePicker = () => {
    setShowDatePicker(true);
  };

  const topicsData = [
    { value: "Topic 1", label: "Topic 1" },
    { value: "Topic 2", label: "Topic 2" },
    { value: "Topic 3", label: "Topic 3" },
  ];

  const FormListComponents = [
    <CourseDropDown
      value={courseId}
      onChange={(item) => setCourseId(item)}
      style={styles.container}
      label={"Course ID"}
      placeholder={"Select your course ID"}
    />,
    <TopicDropDown
      // data={topicsData}
      value={topic}
      onChange={(item) => setTopic(item)}
      style={styles.container}
      label={"Topic"}
      placeholder={"Choose your topic"}
    />,
    <DateAndTimePicker
      showDatePicker={showDatePicker}
      handleOpenDatePicker={handleOpenDatePicker}
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
      <TimeDropDown
        value={startTime}
        onChange={(item) => setStartTime(item)}
        style={styles.inputSmall}
        placeholder={"Pick a time"}
        mode={"time"}
        label={"Start time"}
      />

      <TimeDropDown
        value={endTime}
        onChange={(item) => setEndTime(item)}
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
            {FormListComponents.map((items) => {
              return items;
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <PrimaryButton
        title={"Save & select a tutor"}
        onPress={() => {
          navigation.navigate("Select a tutor");
        }}
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
