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

const AddCourseModal = () => {
  const {addNewCoursesToTutor } = useContext(TutorContext);
  const navigation = useNavigation();
  const tutorId = auth.currentUser.uid

  const [loading, setLoading] = useState(false);
  const [courseName, setCourseName] = useState('');

  // updates location of the current request object
  const handleSubmitSession = async (tutorId, courseName) => {

    try {
     
      setLoading(true);

      // Add a new course to the tutor object
      await addNewCoursesToTutor(tutorId, courseName);

      // Set loading state to false after successful update
      setLoading(false)
      navigation.navigate('Edit profile')

      console.log("course added successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while adding courses:", error.message);
    }
  };

  return (
    
    <View style={styles.modalContainer}>
      <KeyboardAwareScrollView style={{width:'100%'}}>
      <Text style={styles.title}>Add a new course</Text>
      
      <View style={{ width:'100%'}}>
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
          onPress={() => handleSubmitSession(tutorId, courseName)}
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
