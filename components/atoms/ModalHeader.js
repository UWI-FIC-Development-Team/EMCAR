import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const ModalHeader = ({ onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomSheetHead}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomSheetHead: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    color: "#006A6A",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontSize: 14,
  },
});

export default ModalHeader;
