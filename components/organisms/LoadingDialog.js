import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoadingDialog = ({ visible, onDismiss }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onDismiss}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Please Wait</Text>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.message}>Logging you in</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default LoadingDialog;
