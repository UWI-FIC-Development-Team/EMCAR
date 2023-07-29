import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { Feather } from '@expo/vector-icons';

const FloatingButton = () => {
  return (
    <View style={styles.floatingbutton}>
      <Feather  name="edit-2" size={24} color="black" />
      <Text style={styles.labelText}>Request a Session</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  labelText: {
    fontSize: FontSize.materialThemeLabelLarge_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    textAlign: "center",
    marginLeft: 12,
  },
  floatingbutton: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FloatingButton;
