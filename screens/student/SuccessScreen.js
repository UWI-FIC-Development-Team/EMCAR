import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import { Image } from "expo-image";

const SuccessScreen = ({ onPresent, onClose, route }) => {
  const navigation = useNavigation();
  const { selectedTutor } = route.params;

  // Define the function to handle navigation to the CreateRequest screen
  const handleCreateRequest = () => {
    navigation.pop();
    navigation.navigate("Request a session");
  };

  const tutorNameStyled = () => {
    return <Text style={[styles.title3]}>{selectedTutor}</Text>;
  };

  return (
    <View style={styles.modalContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/success.png")}
        contentFit="contain"
      />
      <Text style={[styles.title, styles.titleTypo]}>
        Great! Your request to {tutorNameStyled()} has been submitted
        successfully.
      </Text>
      <PrimaryButton
        title="Create another request"
        onPress={handleCreateRequest}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        <Text style={[styles.title2, styles.titleTypo]}>Go back home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,

    width: "100%",
  },
  titleTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    lineHeight: 20,
    fontSize: FontSize.materialThemeTitleMedium_size,
    textAlign: "center",
    marginTop: 16,
  },

  title: {
    color: Color.materialThemeSysLightPrimary,
    marginBottom: 12,
  },
  title2: {
    color: Color.materialThemeSysLightPrimary,
    textDecorationLine: "underline",
  },
  title3: {
    color: Color.materialThemeSysLightPrimary,
    fontFamily: FontFamily.title3,
  },
  image: {
    height: "50%",
    width: "50%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "red",
  },
});

export default SuccessScreen;
