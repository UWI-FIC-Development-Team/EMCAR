import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import UserProfileHeader from "../../components/atoms/UserProfileHeader";
import SettingChipContainer from "../../components/molecules/SettingChipContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../../GlobalStyles";
import SettingSelectChip from "../../components/atoms/SettingSelectChip";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Settings = () => {
  const { signOut, activeUser, setActiveUser } = useContext(AuthContext);
  // const {resetAllStates} = useContext(SessionContext)
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut();
    setActiveUser("");
    // resetAllStates()
    navigation.navigate("Log In");
  };
  return (
    <View style={styles.settings}>
      <UserProfileHeader UserName={activeUser} />
      <SettingChipContainer title={"Account"}>
        <SettingSelectChip iconName={"mail"} title={"Email"} />
        <SettingSelectChip iconName={"lock"} title={"Password"} />
        <SettingSelectChip iconName={"bell"} title={"Notification"} />
      </SettingChipContainer>
      <TouchableOpacity
        style={styles.stateLayerWrapper}
        activeOpacity={0.2}
        onPress={handleSignOut}
      >
        <Text style={styles.labelText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.materialThemeSysLightPrimary,
  },
  stateLayerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 70,
  },

  settings: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
    paddingTop: Padding.p_26xl,
    paddingHorizontal: Padding.p_6xl,
    backgroundColor: "red",
  },
});

export default Settings;
