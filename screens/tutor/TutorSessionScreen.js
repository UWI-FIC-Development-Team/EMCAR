import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SessionsCard from "../../components/molecules/SessionsCard";
import { useNavigation } from "@react-navigation/native";
import FloatingButton from "../../components/atoms/FloatingButton";
import { Color, FontSize, FontFamily, Padding, Border } from "../../GlobalStyles";
import DropDownChip from "../../components/atoms/DropDownChip";
import { ScrollView } from "react-native-gesture-handler";

const SessionScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={[styles.sessions, styles.sessionsFlexBox]}>
      
        <SessionsCard title={'Pending Sessions'}>
            <DropDownChip courseTitle={'COMP1205'} IconName={'alert-circle'}/>
            <DropDownChip courseTitle={'MATH0110'} IconName={'alert-circle'}/>
        </SessionsCard>
        <SessionsCard title={'Upcoming Sessions'}>
            <DropDownChip courseTitle={'COMP1205'} IconName={'check-circle'}/>
            <DropDownChip courseTitle={'MATH0110'} IconName={'check-circle'}/>
        </SessionsCard>
        <SessionsCard title={'Past Sessions'}>
            <DropDownChip courseTitle={'COMP1205'} IconName={'check-circle'}/>
            <DropDownChip courseTitle={'MATH0110'} IconName={'check-circle'}/>
        </SessionsCard>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
 

  extendedFabFlexBox: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
 

  extendedFab: {
    borderRadius: Border.br_base,
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 177,
  },
  extendedFabWrapper: {
    justifyContent: "flex-end",
    marginTop: 194,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  container: {
    marginTop: 30,
    width:'100%',
    flex: 1,
  },
  sessions: {
    width: "100%",
    paddingTop: Padding.p_26xl,
    paddingHorizontal: Padding.p_6xl,
    flex: 1,
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default SessionScreen;
