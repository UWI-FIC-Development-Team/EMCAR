import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import TutorProfileHeader from "../../components/molecules/TutorProfileHeader";
import SessionStatusBar from "../../components/molecules/SessionStatusBar";
import { useNavigation } from "@react-navigation/native";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import FloatingButton from "../../components/atoms/FloatingButton";
import {
  Padding,
  FontFamily,
  Color,
  FontSize,
  Border,
} from "../../GlobalStyles";

const TutorPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tutorPage}>
      <ScrollView>
        <TutorProfileHeader />

        <SessionStatusBar />

        <DashBoardCard
          title={"Bio"}
          showTitle={true}
          showSeeAll={true}
        ></DashBoardCard>
        <DashBoardCard
          title={"Schedule"}
          showTitle={true}
          showSeeAll={true}
        ></DashBoardCard>
        <DashBoardCard
          title={"Courses"}
          showTitle={true}
          showSeeAll={true}
        ></DashBoardCard>
        <FloatingButton title={'Edit your profile'} navigateTo={'Edit profile'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tutorPage: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
  },
});

export default TutorPage;
