import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Padding } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";

const AllTutors = () => {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.listDialogParent}>
        <DashBoardCard title={"Available"} showTitle={true}>
          <DashBoardChip iconIsVisible={true} onPress={() => {navigation.navigate('')}} />
          <DashBoardChip iconIsVisible={true} onPress={() => {navigation.navigate('')}}  />
          <DashBoardChip iconIsVisible={true}/>
        </DashBoardCard>
        <DashBoardCard title={"Unavailable"} showTitle={true}>
          <DashBoardChip iconIsVisible={true} onPress={() => {navigation.navigate('')}}  />
          <DashBoardChip iconIsVisible={true} onPress={() => {navigation.navigate('')}} />
          <DashBoardChip iconIsVisible={true}/>
        </DashBoardCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  studentDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: 5,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default AllTutors;
