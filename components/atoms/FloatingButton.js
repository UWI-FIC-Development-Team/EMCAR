import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";

const FloatingButton = () => {
  return (
    <View style={styles.extendedFabWrapper}>
      <TouchableOpacity
        style={[styles.extendedFab, styles.extendedFabFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SessionRequest")}
      >
        <View style={styles.floatingbutton}>
          <Feather name="edit-2" size={24} color="#fff" />
          <Text style={styles.labelText}>Request a Session</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: FontSize.materialThemeLabelLarge_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: '#fff',
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
  extendedFab: {
    borderRadius: Border.br_base,
    backgroundColor: '#006A6A',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
  },
  extendedFabWrapper: {
    justifyContent: "flex-end",
    marginBottom: 32,
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",

  },
});

export default FloatingButton;
