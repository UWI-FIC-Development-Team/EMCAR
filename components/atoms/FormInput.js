import React from "react";
import { TextInput, StyleSheet, View, Text} from "react-native";
import { Color, Border, Padding} from "../../GlobalStyles";


const FormInput = ({ 
  placeholder, 
  secureTextEntry, 
  label , 
  value, 
  onChangeText, 
  keyboardType,
  multiline = false
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        style={styles.textField}
        placeholderTextColor="#191c1c"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize='words'
        multiline={multiline} // Use the multiline prop directly
        numberOfLines={multiline ? 5 : 1} // Set the numberOfLines conditionally
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    marginBottom:16
  },
  textField: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#d1d5d5",
    paddingHorizontal: 10,
    height:50
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default FormInput;
