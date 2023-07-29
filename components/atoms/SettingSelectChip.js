import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { Feather } from '@expo/vector-icons';

const SettingSelectChip = ({iconName, title}) => {
  return (
    <View style={styles.stateLayer}>
      <Feather style={styles.icon} name={iconName} size={24} color="black" />
      <Text style={[styles.headline, styles.headlineFlexBox]}>
        {title}
      </Text>
      <Feather style={styles.icon} name="chevron-right" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  headlineFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon: {
    color:Color.materialThemeSysLightPrimary,
  },
  headline: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeTitleMedium,
    color: Color.materialThemeSysLightOnSurface,
    textAlign: "left",
    display: "flex",
    width: 204,
    marginLeft: 16,
  },

  stateLayer: {
    display:'flex',
    backgroundColor:Color.materialThemeSysLightBackground,
    borderRadius:5,
    flexDirection: "row",
    padding:12,
    justifyContent: "center",
    marginTop: 12,
  },
});

export default SettingSelectChip;
