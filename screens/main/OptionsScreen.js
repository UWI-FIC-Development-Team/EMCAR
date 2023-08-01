import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import DashBoardChip from "../../components/atoms/DashBoardChip";


const OptionsScreen = ({ onPresent, onClose, route}) => {
  const navigation = useNavigation();
  const { selectedTutor } = route.params;
   

  // Define the function to handle navigation to the CreateRequest screen
  const handleCreateRequest = () => {
    navigation.pop()
    navigation.navigate("Complete request", {selectedTutor:selectedTutor});
  };

  return (
    <View style={styles.modalContainer}>
        <Text style={styles.title}>Almost There!</Text>
        <View style={{width:'100%'}}>
        <DashBoardChip tutorName={selectedTutor} iconIsVisible={false}/>
        </View>
        <PrimaryButton title="Sumbit your request" onPress={handleCreateRequest} />
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
