import { useContext, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import { SessionContext } from "../../context/RequestContextProvider";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";


const SubmitSessionScreen = ({ onPresent, onClose, route }) => {
  const { sessionRequest, setSessionRequest, dataIsSent, sendARequest, setDataIsSent} = useContext(SessionContext);
  const navigation = useNavigation();
  const { selectedTutor } = route.params;

  const [loading, setLoading] = useState(false)
  // check to see if there data as being sent to the database
  useEffect(() => {
    // Check if the activeUser is available and not null, then navigate to the "StudentDB" screen
    if (dataIsSent) {
      setLoading(false);
      navigation.navigate("Select a tutor");
    }
  }, [dataIsSent]);


  // Define the function to handle navigation to the CreateRequest screen
  const handleCreateRequest = async (tutorID) => {
    console.log('This is the tutor you requested: ', tutorID);
    setLoading(true)
    // Update the tutorId directly in the sendARequest function call
    await sendARequest({ ...sessionRequest, tutorId: tutorID }); 
    navigation.pop();
    setSessionRequest({})
    setDataIsSent(false)
    navigation.navigate("Complete request", { selectedTutor: selectedTutor });
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Almost There!</Text>
      <View style={{ width: "100%" }}>
        <DashBoardChip tutorName={selectedTutor} iconIsVisible={false} />
      </View>
      {loading ? <ActivityIndicator animating={true} color="#006A6A"/>
     : <PrimaryButton
        title="Sumbit your request"
        onPress={()=>handleCreateRequest(selectedTutor)}
      />
      }
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

export default SubmitSessionScreen;
