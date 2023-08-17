import { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { ActivityIndicator } from "react-native-paper";
import FormInput from "../../components/atoms/FormInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../../context/UserContextProvider";
const UpdateUserProfile = ({ route, navigation }) => {
  const { updateType } = route.params;

  const { updateUserProfile, updateUserEmail, updateUserPassword } =
    useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [updateValue, setUpdateValue] = useState("");

  const handleUpdate = async () => {
    setLoading(true);
    switch (updateType) {
      case "name":
        await updateUserProfile(updateValue);
        break;
      case "email":
        await updateUserEmail(updateValue);
        break;
      case "password":
        await updateUserPassword(updateValue);
        break;
      default:
        // Handle other cases if needed
        break;
    }
    setLoading(false);
  };

  const placeholderText =
    updateType === "name"
      ? "Enter new name"
      : updateType === "email"
      ? "Enter new email"
      : "Enter new password";

  return (
    <View style={styles.modalContainer}>
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <Text style={styles.title}> Update {updateType}</Text>

        <View style={{ width: "100%" }}>
          <FormInput
            value={updateValue}
            onChangeText={setUpdateValue}
            placeholder={placeholderText}
          />
        </View>

        {loading ? (
          <ActivityIndicator
            style={{ marginVertical: 16 }}
            animating
            color="#006A6A"
          />
        ) : (
          <PrimaryButton title="Save & submit" onPress={handleUpdate} />
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
    paddingVertical: 55,
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
export default UpdateUserProfile;
