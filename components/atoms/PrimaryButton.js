import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { Color, FontFamily } from "../../GlobalStyles";

const PrimaryButton = ({
  rippleColor = "rgba(150, 227, 227, 0.15)",
  disabled,
  mode = "contained",
  onPress,
  title,
  backgroundColor = Color.materialThemeSysLightPrimary, // Set the default background color
  textColor = "white", // Set the default text color
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        buttonColor={backgroundColor}
        rippleColor={rippleColor}
        disabled={disabled}
        mode={mode}
        onPress={onPress}
        style={[styles.button]} // Use backgroundColor prop and default color
        labelStyle={{ color: textColor, fontSize: 16, fontWeight: "500" }}
        contentStyle={{ height: 56 }}
      >
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 18,
    height: 56,
    width: "100%", // Fill the entire width of the button container
  },
});

export default PrimaryButton;
