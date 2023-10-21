import { useContext } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import TutorProfileHeader from "../../components/molecules/TutorProfileHeader";
import SessionStatusBar from "../../components/molecules/SessionStatusBar";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import FloatingButton from "../../components/atoms/FloatingButton";
import { TutorContext } from "../../context/TutorContextProvider";
import InfoText from "../../components/atoms/InfoText";
import TimeAndDateCard from "../../components/atoms/TimeAndDateCard";
import CourseCard from "../../components/atoms/CourseCard";
import { SessionContext } from "../../context/RequestContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";

const TutorPage = () => {
  const { currentTutor, pendingRequests } = useContext(TutorContext);
  const { tutorUpcomingSessions } = useContext(SessionContext);
  const { activeUser } = useContext(AuthContext);

  const { Bio, subjects, availableTimes } = currentTutor;

  const numberOfHoursRegistered = availableTimes ? availableTimes.length : 0;
  const numberOfCoursesRegistered = subjects ? subjects.length : 0;
  const numberOfPendingReuqest = pendingRequests ? pendingRequests.length : 0;

  return (
    <SafeAreaView style={styles.tutorPage}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TutorProfileHeader name={activeUser.name} />

        <SessionStatusBar
          courses={subjects.length}
          notStarted={numberOfPendingReuqest}
          onGoing={tutorUpcomingSessions.length}
          completed="0"
        />

        <DashBoardCard title="Bio" showTitle showSeeAll={false}>
          <Text style={styles.bioText}>{Bio}</Text>
        </DashBoardCard>
        <DashBoardCard
          title={`Schedule(${numberOfHoursRegistered})`}
          showTitle
          showIcon={false}
        >
          {availableTimes?.map((schedule, index) => {
            return (
              <TimeAndDateCard
                key={index}
                showIcon={false}
                day={schedule.day}
                startWorking={schedule.startTime}
                finishWorking={schedule.endTime}
              />
            );
          })}
        </DashBoardCard>
        <DashBoardCard
          title={`Courses(${numberOfCoursesRegistered})`}
          showTitle
          showIcon={false}
        >
          {subjects ? (
            subjects.map((subject, index) => {
              return (
                <CourseCard key={index} showIcon={false} courseName={subject} />
              );
            })
          ) : (
            <InfoText info="No courses added" />
          )}
        </DashBoardCard>
        <FloatingButton title="Edit your profile" navigateTo="Edit profile" />
      </ScrollView>
    </SafeAreaView>
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
  tutorPage: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
  },
});

export default TutorPage;
