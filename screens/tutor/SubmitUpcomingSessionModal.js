import { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import { SessionContext } from "../../context/RequestContextProvider";
import { ActivityIndicator } from "react-native-paper";
import FormInput from "../../components/atoms/FormInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SubmitUpcomingSession = ({ onPresent, onClose, route }) => {
  const {
    updateRequestLocation,
    updateRequestStatusToUpcoming,
    getPendingRequests,
    pendingRequests,
    fetchPendingRequests,
  } = useContext(SessionContext);
  const navigation = useNavigation();
  const { requestId, studentName } = route.params;

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");


  // updates location of the current request object
  const handleSubmitSession = async (requestId, location) => {
    try {
      setLoading(true);

      // Update the request status to "upcoming"
      await updateRequestStatusToUpcoming(requestId);

      // Update the request location
      await updateRequestLocation(requestId, location);
      await fetchPendingRequests();

      // Set loading state to false after successful update
      setLoading(false);
      navigation.navigate("Dashboard");

      console.log("Session details updated successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while updating session details:", error.message);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Complete Submisson</Text>
        <View style={{ width: "100%" }}>
          <DashBoardChip tutorName={studentName} iconIsVisible={false} />
        </View>

        <View style={{ width: "100%" }}>
          <FormInput
            value={location}
            onChangeText={setLocation}
            placeholder="Enter location"
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
            onPress={() => handleSubmitSession(requestId, location)}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: "80%",
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

export default SubmitUpcomingSession;
