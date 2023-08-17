import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, Color } from "../../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import InfoText from "../../components/atoms/InfoText";
import TimeAndDateCard from "../../components/atoms/TimeAndDateCard";
import CourseCard from "../../components/atoms/CourseCard";
import { useContext, useState } from "react";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";

const EditProfile = ({ navigation }) => {
  const {
    currentTutor,
    setCurrentTutor,
    deleteCourseFromTutor,
    deleteAvailableTimesFromTutor,
  } = useContext(TutorContext);
  const { Bio, subjects, topics, availableTimes } = currentTutor;
  // console.log(" This is the bio of the current tutor", availableTimes);

  const tutorId = auth.currentUser.uid;
  //   const [interestedTopics, setInterestedTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDeleteCourse = async (tutorId, courseName) => {
    try {
      // Update local state to remove the deleted course
      setCurrentTutor((prevTutor) => {
        const updatedSubjects = prevTutor.subjects.filter(
          (subject) => subject !== courseName
        );
        return { ...prevTutor, subjects: updatedSubjects };
      });
      setLoading(true);

      console.log("deleting course...");

      // delete new course to the tutor object from firestore
      await deleteCourseFromTutor(tutorId, courseName);
      // This function delete course from the current state

      setLoading(false);

      // Set loading state to false after successful update

      console.log("course deleted successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while adding courses:", error.message);
    }
  };

  const handleDeleteWorkHours = async (tutorId, daytoDelete) => {
    try {
      //  Update local state to remove the deleted course
      setCurrentTutor((prevTutor) => {
        const updatedTimes = prevTutor.availableTimes.filter(
          (day) => day.day !== daytoDelete
        );
        return { ...prevTutor, availableTimes: updatedTimes };
      });
      setLoading(true);

      console.log("deleting course...");

      // delete new course to the tutor object from firestore
      await deleteAvailableTimesFromTutor(tutorId, daytoDelete);
      // This function delete course from the current state

      setLoading(false);

      // Set loading state to false after successful update

      console.log("course deleted successfully");
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error while adding courses:", error.message);
    }
  };

  return (
    <View style={styles.confirmSessionDetails}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.bottomSheetHead}
      >
        <Feather name="x" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, width: "100%" }}
      >
        <View style={styles.headlineParent}>
          <Text style={styles.headline0}>Edit Profile</Text>
        </View>
        <DashBoardCard
          onPress={() => {
            navigation.navigate("update bio");
          }}
          title="Edit your Bio"
          showTitle
          iconName="edit"
          showIcon
        >
          <Text style={styles.bioText}>{Bio}</Text>
        </DashBoardCard>
        <DashBoardCard
          iconName="plus"
          title="Create a schedule"
          showTitle
          showIcon
          onPress={() => {
            navigation.navigate("Add work hours");
          }}
        >
          {availableTimes.length > 0 &&
            availableTimes.map((schedule, index) => {
              return (
                <TimeAndDateCard
                  key={index}
                  showIcon
                  day={schedule.day}
                  startWorking={schedule.startTime}
                  finishWorking={schedule.endTime}
                  onPress={() => {
                    handleDeleteWorkHours(tutorId, schedule.day);
                  }}
                />
              );
            })}
        </DashBoardCard>
        <DashBoardCard
          iconName="plus"
          title="Add a course"
          showTitle
          showIcon
          onPress={() => {
            navigation.navigate("Add a course");
          }}
        >
          {subjects ? (
            subjects.map((subject, index) => {
              return (
                <CourseCard
                  key={index}
                  showIcon
                  courseName={subject}
                  onPress={() => handleDeleteCourse(tutorId, subject)}
                />
              );
            })
          ) : (
            <InfoText info="No courses added" />
          )}
        </DashBoardCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bioText: {
    color: "#000",
    fontSize: 14,
    padding: 8,
    width: "100%",
    height: 100,
    fontWeight: "500",
  },
  bottomSheetHead: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 12,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  listSpaceBlock: {},

  textTypo: {
    color: "#404040",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontSize: 14,
    textAlign: "left",
    marginBottom: 12,
    marginRight: 8,
  },

  title: {
    color: "#487777",
    lineHeight: 20,
    fontSize: 14,
    marginVertical: 12,
    textAlign: "left",
    // fontFamily: FontFamily.materialThemeLabelMedium,
    fontWeight: "500",
  },
  headlineParent: {},

  headlineTypo: {
    textAlign: "left",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },

  headline1: {
    fontSize: 18,
    lineHeight: 24,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    marginBottom: 12,
  },
  headline0: {
    fontSize: 24,
    lineHeight: 24,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    justifyContent: "flex-start",
    width: "100%",
    fontWeight: "600",
  },

  confirmSessionDetails: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 24,
    flex: 1,
  },
});

export default EditProfile;
