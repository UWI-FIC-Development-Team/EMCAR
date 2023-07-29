import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Border,
  FontFamily,
  Padding,
  Color,
  FontSize,
} from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ title, style, backButtomShown, NotificationIconShown}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const BackButton = () => {
    return (
      <TouchableOpacity onPress={handleBackPress}>
        <Feather name="chevron-left" size={32} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.headerContainer}>
      {backButtomShown ? <BackButton /> : <Text></Text>}
      <Text style={styles.headerText}>{title}</Text>
      {NotificationIconShown ? (
        <Feather name="bell" size={32} color="black" />
      ) : <Text></Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: Color.materialThemeSysLightBackground,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    marginTop: 0,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    fontFamily: FontFamily.materialThemeTitleMedium,
  },
});

export default Header;
