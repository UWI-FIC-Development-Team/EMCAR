import React from "react";
import { TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../../GlobalStyles";


const PrimaryButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.stateLayer}>
        <Text style={styles.labelText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    backgroundColor: Color.materialThemeSysLightPrimary,
    height: 56,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginTop:16
  },
  labelText: {
    color: "white",
    fontSize: 16,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "bold",
  },
});

export default PrimaryButton;
