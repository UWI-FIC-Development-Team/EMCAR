import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

const FormInput = ({
  placeholder,
  style,
  secureTextEntry,
  label,
  value,
  onChangeText,
  keyboardType,
  multiline = false,
  autoFocus,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        style={[styles.textField, style]}
        placeholderTextColor="#191c1c"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize="sentences"
        multiline={multiline} // Use the multiline prop directly
        numberOfLines={multiline ? 5 : 1} // Set the numberOfLines conditionally
        autoFocus={autoFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 8,
  },
  textField: {
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 12,
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 8,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default FormInput;
