import { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import FormInput from "../../components/atoms/FormInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";
import { TimePicker } from "../../components/atoms/DateAndTimePicker";

const AddWorkHours = () => {
  const { addAvailableTimesToTutor } = useContext(TutorContext);
  const navigation = useNavigation();
  const tutorId = auth.currentUser.uid;


  const [loading, setLoading] = useState(false);
  const [dailySchedule, setDailySchedule] = useState({
    day: "",
    startTime:new Date(Date.now()) ,
    endTime: new Date(Date.now()),
  });

  const handleStartTimeChange = (event, selectedDate) => {
    if (selectedDate) {
      setDailySchedule((prev) => {
        return { ...prev, startTime: selectedDate };
      });
    }
  };

  const handleEndTimeChange = (event, selectedDate) => {
    if (selectedDate) {
      setDailySchedule((prev) => {
        return { ...prev, endTime: selectedDate };
      });
    }
  };

  // updates location of the current request object
  const handleSubmitSession = async (tutorId, workingHours) => {
    try {
      setLoading(true);

      // Add a new course to the tutor object
      await addAvailableTimesToTutor(tutorId, workingHours);

      // Set loading state to false after successful update
      setLoading(false);
      navigation.navigate("Edit profile");

      console.log("course added successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while adding courses:", error.message);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Add a new course</Text>

        <View style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TimePicker
              time={dailySchedule.startTime}
              handleTimeChange={handleStartTimeChange}
              placeholder={"Pick a time"}
              mode={"time"}
              label={"Start time"}
            />

            <TimePicker
              time={dailySchedule.endTime}
              handleTimeChange={handleEndTimeChange}
              placeholder={"Pick a time"}
              mode={"time"}
              label={"End time"}
            />
          </View>
          <FormInput
            value={dailySchedule.day}
            onChangeText={(day) => {
              setDailySchedule((prev) => {
                return { ...prev, day: day };
              });
            }}
            placeholder="Add a day"
          />
        </View>

        {loading ? (
          <ActivityIndicator
            style={{ marginVertical: 16 }}
            animating={true}
            color="#006A6A"
          />
        ) : (
          <PrimaryButton
            title="Save & submit"
            onPress={() => handleSubmitSession(tutorId, dailySchedule)}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddWorkHours;