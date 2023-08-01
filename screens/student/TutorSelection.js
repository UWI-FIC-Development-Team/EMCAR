import React from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding } from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";

const TutorSelection = () => {
  const navigation = useNavigation();

  // Available tutors list
  const availableTutors = [
    { name: "John Smith" },
    { name: "Emily Johnson" },
    { name: "Michael Brown" },
  ];

  // Unavailable tutors list
  const unavailableTutors = [
    { name: "Jessica Lee" },
    { name: "David Clark" },
  ];

  return (
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.listDialogParent}>
        <DashBoardCard title={"Available"} showTitle={true}>
          {availableTutors.map((tutor) => (
            <DashBoardChip
              key={tutor.name}
              tutorName={tutor.name}
              iconIsVisible={false}
             onPress={() => {
                navigation.navigate("submit session", { selectedTutor: tutor.name });
              }} 
            />
          ))}
        </DashBoardCard>
        <DashBoardCard title={"Unavailable"} showTitle={true}>
          {unavailableTutors.map((tutor) => (
            <DashBoardChip
              key={tutor.name}
              tutorName={tutor.name}
              iconIsVisible={false}
              onPress={() => {}}
            />
          ))}
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

export default TutorSelection;
