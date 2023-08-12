import * as React from "react";
import { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OnboardingScreen1a from "../screens/main/OnboardingScreen1a";
import OnboardingScreen2 from "../screens/main/OnboardingScreen2";
import PasswordReset from "../screens/main/PasswordReset";
import TutorPage from "../screens/student/TutorPage";
import SessionRequest from "../screens/student/SessionRequest";
import SignUpScreen from "../screens/main/SignUpScreen";
import LoginScreen from "../screens/main/LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../components/atoms/Header";
import AllTutors from "../screens/student/AllTutorsScreen";
import TutorSelection from "../screens/student/TutorSelection";
import SuccessScreen from "../screens/student/SuccessScreen";
import SubmitSessionScreen from "../screens/main/SubmitSessionModal";
import TutorSignUpScreen from "../screens/tutor/TutorRegistrationScreen";
import RequestConfirmationScreen from "../screens/tutor/RequestConfirmationScreen";
import SubmitUpcomingSession from "../screens/tutor/SubmitUpcomingSessionModal";
import SessionDetails from "../screens/main/SessionDetails";
import TutorProfileScreen from "../screens/tutor/TutorProfileScreen";
import EditProfile from "../screens/tutor/EditProfile";
import AddCourseModal from "../screens/tutor/AddCourseModal";
import AddWorkHours from "../screens/tutor/AddWorkHoursModal";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const AppNavigator = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("../assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("../assets/fonts/Roboto_medium.ttf"),
    Roboto_semibold: require("../assets/fonts/Roboto_semibold.ttf"),
    Inter_bold: require("../assets/fonts/Inter_bold.ttf"),
    "Work Sans_medium": require("../assets/fonts/Work_Sans_medium.ttf"),
    "Work Sans_bold": require("../assets/fonts/Work_Sans_bold.ttf"),
    Poppins_bold: require("../assets/fonts/Poppins_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="MainStack">
          <RootStack.Group>
            <RootStack.Screen
              name="MainStack"
              component={MainStack}
              options={{ headerShown: false }}
            />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: "modal",
              gestureResponseDistance: 1000,
            }}
          >
            <RootStack.Screen
              name="submit session"
              component={SubmitSessionScreen}
              options={{
                headerMode: "none",
                cardStyle: {
                  backgroundColor: "rgba(0,0,0,0)",
                },
              }}
            />
          </RootStack.Group>

          <RootStack.Group
            screenOptions={{
              presentation: "modal",
              gestureResponseDistance: 1000,
            }}
          >
            <RootStack.Screen
              name="Complete request"
              component={SuccessScreen}
              options={{
                headerMode: "none",
                cardStyle: {
                  backgroundColor: "rgba(0,0,0,0)",
                },
              }}
            />
          </RootStack.Group>

          <RootStack.Group
            screenOptions={{
              presentation: "modal",
              gestureResponseDistance: 1000,
            }}
          >
            <RootStack.Screen
              name="update session"
              component={SubmitUpcomingSession}
              options={{
                headerMode: "none",
                cardStyle: {
                  backgroundColor: "rgba(0,0,0,0)",
                },
              }}
            />
          </RootStack.Group>

          <RootStack.Group
            screenOptions={{
              presentation: "modal",
              gestureResponseDistance: 135,
            }}
          >
            <RootStack.Screen
              name="Confirm Request"
              component={RequestConfirmationScreen}
              options={{
                headerMode: "none",
              }}
            />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: "modal",
              gestureResponseDistance: 1000,
            }}
          >
            <RootStack.Screen
              name="Add a course"
              component={AddCourseModal}
              options={{
                headerMode: "none",
              }}
            />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: "modal",
              gestureResponseDistance: 1000,
            }}
          >
            <RootStack.Screen
              name="Add work hours"
              component={AddWorkHours}
              options={{
                headerMode: "none",
              }}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

const MainStack = () => {
  const screenOptions = useMemo(
    () => ({
      header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title={title}
            backButtomShown={true}
            NotificationIconShown={false}
          />
        );
      },
    }),
    []
  );

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="OnboardingScreen1a"
    >
      <Stack.Screen
        name="OnboardingScreen1a"
        component={OnboardingScreen1a}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentDB"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Session Details"
        component={SessionDetails}
        options={{
          headerShown: false,
          presentation: "modal",
          gestureResponseDistance: 1000,
        }}
      />
      <Stack.Screen
        name="Sign up"
        component={TutorSignUpScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="PasswordReset"
        component={PasswordReset}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="tutor profile"
        component={TutorProfileScreen}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="All tutors"
        component={AllTutors}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Edit profile"
        component={EditProfile}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="Select a tutor"
        component={TutorSelection}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Request a session"
        component={SessionRequest}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Log In"
        component={LoginScreen}
        options={{ headerShown: true }}
      />

      {/* Add more screens here... */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
