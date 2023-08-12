import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { TutorContext } from "../../context/TutorContextProvider";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CourseCard = ({ courseName }) => {
  const { DeleteCourseFromTutor } = useContext(TutorContext);

  const handleDeleteCourse = async (tutorId, course) => {
    try {
      setLoading(true);

      // Add a new course to the tutor object
      await DeleteCourseFromTutor(tutorId, course);

      // Set loading state to false after successful update
      setLoading(false);
      navigation.navigate("Edit profile");

      console.log("course added successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while adding courses:", error.message);
    }
  };
  function getFirstCharacter(str) {
    return str.substring(0, 1);
  }

  const intital = getFirstCharacter(courseName);

  return (
    <View style={styles.courseCard}>
      <View style={styles.leadingElement}>
        <View style={[styles.buildingBlocksmonogram, styles.initialLayout]}>
          <Avatar.Text size={32} label={intital} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.headline, styles.initialClr]}>{courseName}</Text>
      </View>
      <TouchableOpacity onPress={(course)=>{handleDeleteCourse(tutorId, course)}}>
      <Feather name="x" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buildingBlocksmonogram: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    overflow: "hidden",
  },
  leadingElement: {
    justifyContent: "center",
    overflow: "hidden",
  },
  headline: {
    fontFamily: FontFamily.materialThemeBodyLarge,
    textAlign: "left",
    alignSelf: "stretch",
  },
  content: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
    overflow: "hidden",
  },
  iconsclose24px: {
    width: 16,
    height: 16,
    marginLeft: 16,
  },
  courseCard: {
    borderRadius: 12,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#8c8c8c",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 12,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default CourseCard;
