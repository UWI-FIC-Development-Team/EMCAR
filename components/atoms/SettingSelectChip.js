import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";

const SettingSelectChip = ({ iconName, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.stateLayer}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Feather style={styles.icon} name={iconName} size={24} />
        <Text style={styles.headline}>{title}</Text>
      </View>
      <Feather style={styles.icon} name="chevron-right" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: Color.materialThemeSysLightPrimary,
  },
  headline: {
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeTitleMedium,
    color: Color.materialThemeSysLightOnSurface,
    width: "100%",
    marginLeft: 16,
  },

  stateLayer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    marginTop: 12,
  },
});

export default SettingSelectChip;
