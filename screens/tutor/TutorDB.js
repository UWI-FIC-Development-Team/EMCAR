import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,

} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Padding, Color, FontSize } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard"
import SessionChip from "../../components/atoms/SessionChip";

const TutorDB = () => {
 

 return (
    <ScrollView style={styles.tutorDb}>
      <StatusBar barStyle={'dark-content'}/>
          <DashBoardCard title={'Pending Sessions'}>
            <SessionChip 
            studentName={'Joel'} 
            IconName={'alert-circle'} 
            courseTitle={'COMP1205'}/>
             <SessionChip 
            studentName={'blenman'} 
            IconName={'alert-circle'} 
            courseTitle={'MATH0110'}/>
          </DashBoardCard>
          <DashBoardCard title={'Upcoming Sessions'}>
            <SessionChip 
            studentName={'Joel'} 
            IconName={'calendar'} 
            courseTitle={'COMP1205'}/>
          </DashBoardCard>
          <DashBoardCard title={'Recent Sessions'}>

             <SessionChip 
            studentName={'Grayson'} 
            IconName={'calendar'} 
            courseTitle={'COMP1205'}/>
          </DashBoardCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  tutorDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop:20,
    flex: 1,
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});
 
     

export default TutorDB;
