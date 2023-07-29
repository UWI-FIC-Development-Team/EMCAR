import React, { useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  Padding,
  Color,
} from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import NewResquestCard from "../../components/atoms/NewRequestCard";
import { Feather } from "@expo/vector-icons";
import TopBar2 from "../../components/atoms/TopBar2";
import { AuthContext } from "../../context/AuthContextProvider";

const StudentDB = () => {
  const navigation = useNavigation();
  const {actveUser} = useContext(AuthContext)

  console.log('The current user name is: ',actveUser);

  return (
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.listDialogParent}>
        <TopBar2 userName={actveUser}/>
        <DashBoardCard
          showTitle={true}
          title={"Recent tutors"}
          onPress={() => {
            navigation.navigate("Select a tutor");
          }}
        >
          <DashBoardChip />
          <DashBoardChip />
        </DashBoardCard>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigation.navigate("Select a tutor");
          }}
        >
          <NewResquestCard>
            <Feather style={styles.icon} name="edit" size={48} color="black" />
            <View style={styles.headlineContainer}>
              <Text style={styles.headline}>Create a new session</Text>
            </View>
            <Feather style={styles.icon} name="chevron-right" size={24} color="black" />
          </NewResquestCard>
        </TouchableOpacity>
        <DashBoardCard showTitle={true} title={"Recent sessions"}>
          <DashBoardChip />
        </DashBoardCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  icon:{
    color:Color.materialThemeSysLightPrimary,
  },

  headlineContainer: {
    flex: 1,
    marginLeft: 12,
  },

  headline4: {
    fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: 12,
    textAlign: "left",
    marginTop:6,
    color: '#3F4948',
  },
  headline: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "left",
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },

  studentDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: 20,
    flex: 1,
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default StudentDB;
