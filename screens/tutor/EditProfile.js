import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, Color } from "../../GlobalStyles";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import InfoText from "../../components/atoms/InfoText";
import TimeAndDateCard from "../../components/atoms/TimeAndDateCard";
import CourseCard from "../../components/atoms/CourseCard";
import { SessionContext } from "../../context/RequestContextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { TutorContext } from "../../context/TutorContextProvider";
import { auth } from "../../services/firebaseConfig";
import { log } from "react-native-reanimated";

const EditProfile = ({ route, navigation }) => {
  const { currentTutor, getCurrentTutor } = useContext(TutorContext);

  // These are the states to be updated
  // todo: create a three new screens, edit bio, edit Createschedule, createCourse
  const [biography, setBiography] = useState("");
  const [dailySchedule, setDailySchedule] = useState({
    dayOfWeek: "",
    startTime: "",
    endTime: "",
  });

  const [interestedTopics, setInterestedTopics] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    const fetchCurrentTutor = async () => {
      try {
        const tutorId = auth.currentUser.uid;
        const data = await getCurrentTutor(tutorId);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };

    fetchCurrentTutor();
  }, []);

  const { bio, subjects, topics, availableTimes } = currentTutor;
  //   console.log(' This is the bio of the current tutor', bio, subjects);

  //   console.log("This si the tutor profile info", currentTutor);

  // Convert Firestore timestamps to human-readable format
  //   const formattedRequestDate = requestDate.toDate().toLocaleDateString();
  //   const formattedStartTime = startTime.toDate().toLocaleTimeString();
  //   const formattedEndTime = endTime.toDate().toLocaleTimeString();

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
        <DashBoardCard title={"Create a schedule"} showTitle={true}>
          {availableTimes.map((schedule) => {
            return (
              <TimeAndDateCard
                day={schedule.day}
                beginTime={schedule.startWorking}
                finsihTime={schedule.endWorking}
              />
            );
          })}
        </DashBoardCard>
        <DashBoardCard title={"Add a course"} showTitle={true}>
          {subjects.map((subject) => {
            return <CourseCard courseName={subject} />;
          })}
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
