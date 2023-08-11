import * as React from "react";
import {
  Text,
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import UserProfileHeader from "../../components/atoms/UserProfileHeader";
import SettingChipContainer from "../../components/molecules/SettingChipContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../../GlobalStyles";
import SettingSelectChip from "../../components/atoms/SettingSelectChip";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { SessionContext } from "../../context/RequestContextProvider";

const Settings = () => {
  const {signOut, activeUser, setActiveUser} = useContext(AuthContext)
  // const {resetAllStates} = useContext(SessionContext)
  const navigation = useNavigation();

 const handleSignOut = () =>{
    signOut()
    setActiveUser('')
    // resetAllStates()
    navigation.navigate('Log In')
  } 
  return (
    <ScrollView style={styles.settings}>
       <UserProfileHeader UserName={activeUser} /> 
       <SettingChipContainer title={'Account'}>
          <SettingSelectChip iconName={'user'} title={'Profile'}/>
          <SettingSelectChip iconName={'mail'} title={'Email'}/>
          <SettingSelectChip iconName={'lock'} title={'Password'}/>
          <SettingSelectChip iconName={'bell'} title={'Notification'}/>
        </SettingChipContainer>
       <SettingChipContainer title={'More'}>
          <SettingSelectChip iconName={'star'} title={'Rate & Review'}/>
          <SettingSelectChip iconName={'alert-circle'} title={'Profile'}/>
       </SettingChipContainer>
          <TouchableOpacity
            style={styles.stateLayerWrapper}
            activeOpacity={0.2}
            onPress={handleSignOut}
          >
            <Text style={styles.labelText}>
                Log Out
            </Text>
          </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
    labelText:{
        fontFamily:FontFamily.poppinsBold,
        color:Color.materialThemeSysLightPrimary,
    },
  stateLayerWrapper: {
    flex:1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom:70
  },
  
  settings: {
    width: "100%",
    flex:1,
    paddingTop: Padding.p_26xl,
    paddingHorizontal: Padding.p_6xl,
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default Settings;