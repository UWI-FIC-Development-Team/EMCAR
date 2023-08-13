import { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import FormInput from "../../components/atoms/FormInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";
import { produce } from "immer";
const AddCourseModal = () => {
  const { addNewCoursesToTutor, setCurrentTutor, currentTutor} = useContext(TutorContext);
  const navigation = useNavigation();
  const tutorId = auth.currentUser.uid;

  const [loading, setLoading] = useState(false);
  const [courseName, setCourseName] = useState("");

  const handleAddNewCourse = async (tutorId, courseName) => {
    try {
      setLoading(true);

      // Optimistic update: Add the new course to the local state

      // Use Immer's produce function to update the state
      setCurrentTutor(
        produce(currentTutor, (draft) => {
          draft.subjects.push(courseName);
        })
      );
       


      // Add the new course to the tutor object in Firestore
      await addNewCoursesToTutor(tutorId, courseName);

      setLoading(false); // Set loading state to false after successful update
      navigation.navigate("Edit profile");

      console.log("Course added successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while adding course:", error.message);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Add a new course</Text>

        <View style={{ width: "100%" }}>
          <FormInput
            value={courseName}
            onChangeText={setCourseName}
            placeholder="Add a course"
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
            onPress={() => handleAddNewCourse(tutorId, courseName)}
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
    paddingVertical: 16,
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

export default AddCourseModal;
