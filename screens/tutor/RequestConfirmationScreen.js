import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, Color } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const RequestConfirmationScreen = ({ route, navigation }) => {
  const {
    studentName,
    tutorId,
    subjects,
    topics,
    requestDate,
    startTime,
    endTime,
    location,
    additionalDetails,
    requestId,
  } = route.params;

  // Convert Firestore timestamps to human-readable format
  const formattedRequestDate = requestDate.toDate().toLocaleDateString();
  const formattedStartTime = startTime.toDate().toLocaleTimeString();
  const formattedEndTime = endTime.toDate().toLocaleTimeString();

  return (
    <SafeAreaView style={styles.confirmSessionDetails}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.bottomSheetHead}
      >
        <Feather name="x" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.headlineParent}>
          <Text style={styles.headline0}>Session Details</Text>
          <Text style={styles.title}>
            This page displays the information you provided for your tutor
            request. This helps the tutor prepare a personalized lesson for you.
          </Text>
        </View>

        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Courses</Text>

          {subjects.map((course, index) => {
            return <Text style={styles.textTypo}>{course}</Text>;
          })}
        </View>
        <Divider style={{ width: "100%", height: 3, marginBottom: 16 }} />

        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Topics</Text>

          {topics.map((topic, index) => {
            return <Text style={styles.textTypo}>{topic}</Text>;
          })}
        </View>
        <Divider style={{ width: "100%", height: 3, marginBottom: 16 }} />
        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Date</Text>

          <Text style={[styles.textTypo]}>{formattedRequestDate}</Text>
        </View>
        <Divider style={{ width: "100%", height: 3, marginBottom: 16 }} />

        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>Time</Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTypo}>From: {formattedStartTime}</Text>
            <Text style={styles.textTypo}>To: {formattedEndTime}</Text>
          </View>
        </View>

        <Divider style={{ width: "100%", height: 3, marginBottom: 16 }} />
        <View style={styles.listSpaceBlock}>
          <Text style={[styles.headline1, styles.headlineTypo]}>
            Additional information
          </Text>

          <Text style={styles.textTypo}>{additionalDetails}</Text>
        </View>

        <View style={{ marginVertical: 36 }}>
          <PrimaryButton
            title={"Confirm session"}
            onPress={() => {
              navigation.navigate("update session", {
                studentName: studentName,
                requestId: requestId,
              });
            }}
          />
          <PrimaryButton title={"Reject request"} onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default RequestConfirmationScreen;
