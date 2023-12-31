import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import UserProfileHeader from "../../components/atoms/UserProfileHeader";
import SettingChipContainer from "../../components/molecules/SettingChipContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../../GlobalStyles";
import SettingSelectChip from "../../components/atoms/SettingSelectChip";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { signOut, activeUser, setActiveUser } = useContext(AuthContext);
  // const {resetAllStates} = useContext(SessionContext)
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut();
    // setActiveUser({});
    // resetAllStates()
    navigation.navigate("Log In");
  };
  return (
    <SafeAreaView style={styles.settings}>
      <UserProfileHeader UserName={activeUser.name} />
      <SettingChipContainer title="Account">
        <SettingSelectChip
          iconName="mail"
          title=" Change email"
          onPress={() => {
            navigation.navigate("update profile", {
              updateType: "email",
            });
          }}
        />
        <SettingSelectChip
          iconName="lock"
          title="Change password"
          onPress={() => {
            navigation.navigate("update profile", {
              updateType: "password",
            });
          }}
        />
        <SettingSelectChip
          iconName="user"
          title="Change name"
          onPress={() => {
            navigation.navigate("update profile", {
              updateType: "name",
            });
          }}
        />
        <SettingSelectChip iconName="bell" title="Notification" />
      </SettingChipContainer>
      <TouchableOpacity
        style={styles.stateLayerWrapper}
        activeOpacity={0.2}
        onPress={handleSignOut}
      >
        <Text style={styles.labelText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.materialThemeSysLightPrimary,
  },
  stateLayerWrapper: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 12,
  },

  settings: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
  },
});

export default SettingsScreen;
