import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { Feather } from "@expo/vector-icons";

export const CourseDropDown = ({
  style,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const coursesData = [
    { value: "COMP1205", label: "COMP1205" },
    { value: "MATH0110", label: "MATH0110" },
    { value: "COMP0001", label: "COMP0001" },
  ];

  const [selectedCourse, setSelectedCourse] = useState([]);

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={coursesData}
        search
        maxHeight={170}
        labelField="label"
        valueField="value"
        placeholder={`Select Course (${placeholder})`}
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}
        renderLeftIcon={() => (
          <Feather style={styles.icon} color="black" name="" size={20} />
        )}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <Feather style={styles.icon} color="black" name="x" size={20} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const TopicDropDown = ({
  style,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const topicsData = [
    { value: "Topic 1", label: "Topic 1" },
    { value: "Topic 2", label: "Topic 2" },
    { value: "Topic 3", label: "Topic 3" },
  ];

  const [selectedTopic, setSelectedTopic] = useState([]);

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={topicsData}
        search
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder={`Select Topic (${placeholder})`}
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}
        renderLeftIcon={() => (
          <Feather style={styles.icon} color="black" name="" size={20} />
        )}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <Feather style={styles.icon} color="black" name="x" size={20} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const TimeDropDown = ({
  style,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const timeData = [
    { value: "Morning", label: "Morning" },
    { value: "Afternoon", label: "Afternoon" },
    { value: "Evening", label: "Evening" },
  ];

  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={timeData}
        search
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder={`Select Time (${placeholder})`}
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}
        renderLeftIcon={() => (
          <Feather style={styles.icon} color="black" name="" size={20} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dropdown: {
    marginBottom: 12,
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
