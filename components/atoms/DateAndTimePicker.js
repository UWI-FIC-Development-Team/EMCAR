import React, { useState } from "react";
import { Text,StyleSheet, View, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';



// modify the function so that when the date input is active 
// it shows the file picker ina modal

const DateAndTimePicker = ({ style, mode, placeholder, label }) => {
  const [textFieldDatePicker, setTextFieldDatePicker] = useState(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setTextFieldDatePicker(selectedDate);
    }
  };

  const formattedDate = textFieldDatePicker
    ? textFieldDatePicker.toLocaleDateString()
    : '';

  const handleOpenDatePicker = () => {
    setShowDatePicker(true);
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
      {showDatePicker && (
        <DateTimePicker
          style={styles.textField}
          mode={mode}
          value={textFieldDatePicker || new Date()}
          onChange={handleDateChange}
          display='inline'
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textFieldDatePickerPlaceHolder: {
    fontFamily: "Roboto_regular",
    color: "#3f4948",
    fontSize: 16,
  },
  textFieldDatePickerValue: {
    fontFamily: "Roboto_regular",
    fontSize: 16,
    color: "#191c1c",
  },
  container: {
    alignSelf: 'stretch',
    marginBottom:16,
  },
  customInput: {
    height: 56,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius:12
  },
});

export default DateAndTimePicker;
