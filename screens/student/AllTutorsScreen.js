import React, { useState, useRef, useContext } from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Padding } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import { TutorContext } from "../../context/TutorContextProvider";

const AllTutors = () => {
  const { tutors } = useContext(TutorContext);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.listDialogParent}>
        <DashBoardCard title="Available" showTitle>
          {tutors.map((tutor) => {
            return (
              <DashBoardChip
                key={tutor.tutorId}
                tutorName={tutor.name}
                iconIsVisible
              />
            );
          })}
        </DashBoardCard>
        {/* <DashBoardCard title={"Unavailable"} showTitle={true}>
          <DashBoardChip iconIsVisible={true} onPress={() => {navigation.navigate('')}}  />
          <DashBoardChip iconIsVisible={true} onPress={() => {navigation.navigate('')}} />
          <DashBoardChip iconIsVisible={true}/>
        </DashBoardCard> */}
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
