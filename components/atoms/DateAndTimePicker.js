import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

export const DatePicker = ({
  label,
  style,
  mode,
  placeholder,
  date,
  handleDateChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const formattedDate = date ? date.toLocaleDateString() : "";

  const handleOpenDatePicker = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={handleOpenDatePicker}>
        <View style={styles.customInput}>
          <Text style={styles.textFieldDatePickerValue}>
            {formattedDate || placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DateTimePicker
              style={styles.textField}
              mode={mode}
              value={date}
              onChange={(event, selectedDate) => {
                handleCloseModal();
                handleDateChange(event, selectedDate);
              }}
              display="inline"
            />
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const TimePicker = ({
  label,
  style,
  mode,
  placeholder,
  time,
  handleTimeChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const formattedTime = time
    ? time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "";

  const handleOpenDatePicker = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={handleOpenDatePicker}>
        <View style={styles.customInput}>
          <Text style={styles.textFieldDatePickerValue}>
            {formattedTime || placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DateTimePicker
              style={styles.textField}
              mode={mode}
              value={time}
              onChange={(event, selectedDate) => {
                handleTimeChange(event, selectedDate);
              }}
              display="spinner"
            />
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textFieldDatePickerValue: {
    fontFamily: "Roboto_regular",
    fontSize: 16,
    color: "#191c1c",
  },
  container: {
    alignSelf: "stretch",
    marginBottom: 16,
  },
  customInput: {
    height: 56,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  modalContent: {
    backgroundColor: "#ccc",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
});
