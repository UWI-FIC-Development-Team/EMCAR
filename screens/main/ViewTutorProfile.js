import React, { useContext, useEffect } from "react"; // Added React import
import { View, ScrollView, StyleSheet, Text } from "react-native";
import TutorProfileHeader from "../../components/molecules/TutorProfileHeader";
import SessionStatusBar from "../../components/molecules/SessionStatusBar";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import InfoText from "../../components/atoms/InfoText";
import TimeAndDateCard from "../../components/atoms/TimeAndDateCard";
import CourseCard from "../../components/atoms/CourseCard";
import { SessionContext } from "../../context/RequestContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewTutorProfile = ({ route }) => {
  const { bio, subjects, tutorId, name, availableTimes } = route.params;
  const { getPendingRequests, tutorUpcomingSessions, pendingRequests } =
    useContext(SessionContext);

  console.log(
    "Values from the tutor object: ",
    bio,
    availableTimes,
    tutorId,
    name,
    subjects
  );

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        await getPendingRequests(tutorId);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching pending requests:", error);
      }
    };

    fetchPendingRequests();
  }, []);
  const numberOfHoursRegistered = availableTimes ? availableTimes.length : 0;
  const numberOfCoursesRegistered = subjects ? subjects.length : 0;
  const numberOfPendingRequest = pendingRequests ? pendingRequests.length : 0;
  const numberOfUpcomingRequest = tutorUpcomingSessions
    ? tutorUpcomingSessions.length
    : 0;

  return (
    <SafeAreaView style={styles.tutorPage}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TutorProfileHeader name={name} />

        <SessionStatusBar
          courses={numberOfCoursesRegistered} // Corrected the prop value
          notStarted={numberOfPendingRequest}
          onGoing={numberOfUpcomingRequest}
          completed={0} // Corrected the prop value
        />

        <DashBoardCard title="Bio" showTitle showSeeAll={false}>
          <Text style={styles.bioText}>{bio}</Text>
        </DashBoardCard>
        <DashBoardCard
          title={`Schedule (${numberOfHoursRegistered})`}
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
          title={`Courses (${numberOfCoursesRegistered})`}
          showTitle
          showIcon={false}
        >
          {subjects && subjects.length > 0 ? (
            subjects?.map((subject, index) => {
              return (
                <CourseCard key={index} showIcon={false} courseName={subject} />
              );
            })
          ) : (
            <InfoText info="No courses added" />
          )}
        </DashBoardCard>
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

export default ViewTutorProfile;
