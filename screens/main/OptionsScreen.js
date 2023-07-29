import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";

const OptionsScreen = ({ onPresent, onClose, selectedTutor }) => {
  const navigation = useNavigation();

  // Define the function to handle navigation to the TutorProfile screen
  

  // Define the function to handle navigation to the CreateRequest screen
  const handleCreateRequest = () => {
    navigation.pop()
    navigation.navigate("Request a session");
  
  };

  return (
    <View style={styles.modalContainer}>
        <Text style={styles.title}>Almost There!</Text>
        <PrimaryButton title="View tutor profile"/>
        <PrimaryButton title="Create a request now" onPress={handleCreateRequest} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    
    height:'45%',
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal:16,
    paddingVertical:16,
    position:'absolute',
    bottom:0,
    width:'100%',
    borderRadius:12
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

export default OptionsScreen;
