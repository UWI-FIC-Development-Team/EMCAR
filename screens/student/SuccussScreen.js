import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";

const SuccessScreen = ({ onPresent, onClose, route }) => {
  const navigation = useNavigation();
  const { selectedTutor } = route.params;

  // Define the function to handle navigation to the CreateRequest screen
  const handleCreateRequest = () => {
    navigation.pop();
    navigation.navigate("Request a session");
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={[styles.title, styles.titleTypo]}>
        Great! Your request to {selectedTutor} has been submitted successfully.
      </Text>
      <PrimaryButton title="Create another request" onPress={handleCreateRequest}/>
      <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
      <Text style={[styles.title2, styles.titleTypo]}>
        Go back home
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: "45%",
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
  titleTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    textAlign: "center",
  },

  title: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
  },
  title2: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
    textDecorationLine:'underline'
  },
});

export default SuccessScreen;
