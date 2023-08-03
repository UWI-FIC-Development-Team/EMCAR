import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Feather } from "@expo/vector-icons";
import { onChange } from "react-native-reanimated";

const DropDownPicker = ({ style, data, label, placeholder, value, onChange}) => {
  const [ItemOpen, setItemOpen] = useState(false);
  const [listItems, setListItems] = useState([
    { value: "COMP1205", label: "COMP1205" },
    { value: "MATH0110", label: "MATH0110" },
    { value: "COMP0001", label: "COMP0001" },
  ]);
  // Add a state variable to store the selected value
  const [listItemValue, setListItemValue] = useState(null);

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        autoScroll
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
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

export default DropDownPicker;

const styles = StyleSheet.create({
  
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dropdown: {
    marginBottom: 12,
    height: 56,
    borderRadius:10,
    paddingHorizontal:8,
    borderWidth:1
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
});
