import { useMemo, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OnboardingScreen2 from "../screens/main/OnboardingScreen2";
import SessionRequest from "../screens/student/SessionRequest";
import SignUpScreen from "../screens/main/SignUpScreen";
import LoginScreen from "../screens/main/LoginScreen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import { getHeaderTitle } from "@react-navigation/elements";
import AppHeader from "../components/atoms/Header";
import AllTutors from "../screens/student/AllTutorsScreen";
import TutorSelection from "../screens/student/TutorSelection";
import SuccessScreen from "../screens/student/SuccessScreen";
import SubmitSessionScreen from "../screens/main/SubmitSessionModal";
import RequestConfirmationScreen from "../screens/tutor/RequestConfirmationScreen";
import SubmitUpcomingSession from "../screens/tutor/SubmitUpcomingSessionModal";
import SessionDetails from "../screens/main/SessionDetails";
import EditProfile from "../screens/tutor/EditProfile";
import AddCourseModal from "../screens/tutor/AddCourseModal";
import AddWorkHours from "../screens/tutor/AddWorkHoursModal";
import UpdateBioModal from "../screens/tutor/AddBioModal";
import ListScreen from "../components/organisms/ListScreen";
import UpdateUserProfile from "../screens/main/UpdateUserProfileModal";
import ViewTutorProfile from "../screens/main/ViewTutorProfile";
import ChatRoom from "../screens/main/ChatRoom";
import { StatusBar } from "react-native";
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const AppNavigator = () => {
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
        <RootStack.Navigator
          initialRouteName="MainStack"
          screenOptions={{
            presentation: "transparentModal",
            gestureResponseDistance: 1000,
          }}
        >
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

          {/* <RootStack.Group
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
          </RootStack.Group> */}
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

const customTransitionSpec = {
  open: {
    animation: "timing",
    config: { duration: 200 }, // Adjust the duration as needed (e.g., 200ms for faster transitions).
  },
  close: {
    animation: "timing",
    config: { duration: 200 }, // Adjust the duration as needed (e.g., 200ms for faster transitions).
  },
};

const customScreenOptions = {
  header: ({ navigation, route, options }) => {
    const title = getHeaderTitle(options, route.name);
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <AppHeader title={title} goBack mode="center-aligned" />
      </>
    );
  },
  cardStyle: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width],
                })
              : 1,
          },
        ],
      },
    };
  },
  transitionSpec: {
    open: customTransitionSpec.open,
    close: customTransitionSpec.close,
  },
};

const MainStack = () => {
  const screenOptions = useMemo(
    () => ({
      ...customScreenOptions,
    }),
    []
  );

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="OnboardingScreen2"
    >
      <Stack.Screen
        name="Confirm Request"
        component={RequestConfirmationScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="Complete Request"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="update bio"
        component={UpdateBioModal}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="chat room"
        component={ChatRoom}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="mainDashboard"
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
        name="render list"
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="update profile"
        component={UpdateUserProfile}
        options={{ headerShown: false, presentation: "modal" }}
      />

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
        name="view tutor profile"
        component={ViewTutorProfile}
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
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Log In"
        component={LoginScreen}
        options={{
          presentation: "transparentModal",
          headerShown: true,
        }}
      />

      {/* Add more screens here... */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
