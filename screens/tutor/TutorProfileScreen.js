import { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import TutorProfileHeader from "../../components/molecules/TutorProfileHeader";
import SessionStatusBar from "../../components/molecules/SessionStatusBar";
import { useNavigation } from "@react-navigation/native";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import FloatingButton from "../../components/atoms/FloatingButton";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";
import InfoText from "../../components/atoms/InfoText";
import TimeAndDateCard from "../../components/atoms/TimeAndDateCard";
import CourseCard from "../../components/atoms/CourseCard";

const TutorPage = () => {
  const navigation = useNavigation();

  const { currentTutor, getCurrentTutor } = useContext(TutorContext);

  const { bio, subjects, topics, availableTimes, name } = currentTutor;

  const numberOfHoursRegistered = availableTimes ? availableTimes.length : 0;
  const numberOfCoursesRegistered = subjects ? subjects.length : 0;

  return (
    <View style={styles.tutorPage}>
      <ScrollView>
        <TutorProfileHeader name={name} />

        <SessionStatusBar />

        <DashBoardCard title={"Bio"} showTitle={true} showSeeAll={false}>
          {bio}
        </DashBoardCard>
        <DashBoardCard
          title={`Schedule(${numberOfHoursRegistered})`}
          showTitle={true}
          showIcon={false}
        >
          {availableTimes ? (
            availableTimes.map((schedule) => {
              return (
                <TimeAndDateCard
                  showIcon={false}
                  day={schedule.day}
                  startWorking={schedule.startTime}
                  finishWorking={schedule.endTime}
                />
              );
            })
          ) : (
            <InfoText info={"No Woking hours added"} />
          )}
        </DashBoardCard>
        <DashBoardCard
          title={`Courses(${numberOfCoursesRegistered})`}
          showTitle={true}
          showIcon={false}
        >
          {subjects ? (
            subjects.map((subject) => {
              return <CourseCard showIcon={false} courseName={subject} />;
            })
          ) : (
            <InfoText info={"No courses added"} />
          )}
        </DashBoardCard>
        <FloatingButton
          title={"Edit your profile"}
          navigateTo={"Edit profile"}
        />
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
