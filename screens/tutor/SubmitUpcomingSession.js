import { useContext, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import { SessionContext } from "../../context/RequestContextProvider";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";


const SubmitUpcomingSession = ({ onPresent, onClose, route }) => {
  const { } = useContext(SessionContext);
  const navigation = useNavigation();
  const { requestId,studentName } = route.params;

  const [loading, setLoading] = useState(false)
  


  // updates location of the current request object
  const handleSubmitSession = async (requestId,location) => {
    
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Complete Submisson</Text>
      <View style={{ width: "100%" }}>
        <DashBoardChip tutorName={studentName} iconIsVisible={false} />
      </View>
      {loading ? <ActivityIndicator style={{marginVertical:16}} animating={true} color="#006A6A"/>
     : <PrimaryButton
        title="Sumbit your request"
        onPress={()=>handleCreateRequest(requestId, studentName)}
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

export default SubmitUpcomingSession;
