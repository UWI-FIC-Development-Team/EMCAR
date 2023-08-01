import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

import PrimaryButton from "./atoms/PrimaryButton";
import { useNavigation } from "@react-navigation/core";

const OptionSheet = ({ onClose, isVisible, onCreateRequest }) => {
  const navigation = useNavigation();

 
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    
    >
      <View style={styles.modalContainer}>
        <View style={styles.bottomSheet}>
          <Text style={styles.title}>Almost There!</Text>
          <PrimaryButton title="View tutor profile" />
          <PrimaryButton title="Create a request now" onPress={()=>{navigation.navigate('Succuss Screen')}} />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
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

export default OptionSheet;
