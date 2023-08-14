import { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import FormInput from "../../components/atoms/FormInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";
import { produce } from "immer";
import ModalHeader from "../../components/atoms/ModalHeader";

const UpdateBioModal = () => {
  const { updateTutorBio, setCurrentTutor, currentTutor } =
    useContext(TutorContext);
  const navigation = useNavigation();
  const tutorId = auth.currentUser.uid;
  const { Bio } = currentTutor;
  const [loading, setLoading] = useState(false);
  console.log('This is the current tutor bio', Bio);

  const [biography, setBiography] = useState(Bio);

  const handleUpdateBio = async (tutorId, bio) => {
    try {
      setLoading(true);

      // Use Immer's produce function to update the state
      setCurrentTutor(
        produce(currentTutor, (draft) => {
          draft.Bio = bio;
        })
      );

      // Add the new course to the tutor object in Firestore
      await updateTutorBio(tutorId, bio);

      setLoading(false); // Set loading state to false after successful update
      navigation.navigate("Edit profile");

      console.log("Bio updated successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while updating bio:", error.message);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <ModalHeader
        onPress={() => {
          handleUpdateBio(tutorId, biography);
        }}
      />
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <View style={{ width: "100%" }}>
          <FormInput
            value={biography}
            onChangeText={setBiography}
            multiline={true}
            style={styles.textInput}
            autoFocus={true}
          />
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 140,
  },

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

export default UpdateBioModal;
