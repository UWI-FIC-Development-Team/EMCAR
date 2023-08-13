import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, Color } from "../../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import InfoText from "../../components/atoms/InfoText";
import TimeAndDateCard from "../../components/atoms/TimeAndDateCard";
import CourseCard from "../../components/atoms/CourseCard";
import { useContext, useEffect, useState, useCallback } from "react";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";

const EditProfile = ({ route, navigation }) => {
  const {
    currentTutor,
    setCurrentTutor,
    getCurrentTutor,
    updateUI,
    deleteCourseFromTutor,
    deleteAvailableTimesFromTutor,
  } = useContext(TutorContext);
  const { bio, subjects, topics, availableTimes } = currentTutor;
  console.log(" This is the bio of the current tutor", availableTimes);

  const tutorId = auth.currentUser.uid;
  //   const [biography, setBiography] = useState("");
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

  const handleDeleteWorkHours = async (tutorId, daytoDelete, courseId) => {
    try {
      console.log("hours are: ", daytoDelete);

    //  Update local state to remove the deleted course
        setCurrentTutor((prevTutor) => {
          const updatedTimes = prevTutor.availableTimes.filter(
            (time) => time.id !== courseId
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
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.headlineParent}>
          <Text style={styles.headline0}>Edit Profile</Text>
          {/* Add body text here */}
          {/* <Text style={styles.title}>
            
          </Text> */}
        </View>

        <DashBoardCard title={"Edit your Bio"} showTitle={true}>
          <InfoText info={bio} />
        </DashBoardCard>
        <DashBoardCard
          title={"Create a schedule"}
          showTitle={true}
          showIcon={true}
          onPress={() => {
            navigation.navigate("Add work hours");
          }}
        >
          {availableTimes ? (
            availableTimes.map((schedule) => {
              return (
                <TimeAndDateCard
                  showIcon={true}
                  day={schedule.day}
                  startWorking={schedule.startTime}
                  finishWorking={schedule.endTime}
                  onPress={() => {
                    handleDeleteWorkHours(tutorId, schedule.day, schedule.id);
                  }}
                />
              );
            })
          ) : (
            <InfoText info={"No Woking hours added"} />
          )}
        </DashBoardCard>
        <DashBoardCard
          title={"Add a course"}
          showTitle={true}
          showIcon={true}
          onPress={() => {
            navigation.navigate("Add a course");
          }}
        >
          {subjects ? (
            subjects.map((subject) => {
              return (
                <CourseCard
                  showIcon={true}
                  courseName={subject}
                  onPress={() => handleDeleteCourse(tutorId, subject)}
                />
              );
            })
          ) : (
            <InfoText info={"No courses added"} />
          )}
        </DashBoardCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
