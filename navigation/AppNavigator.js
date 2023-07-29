import * as React from "react";
import { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OnboardingScreen1a from "../screens/main/OnboardingScreen1a";
import OnboardingScreen2 from "../screens/main/OnboardingScreen2";
import PasswordReset from "../screens/main/PasswordReset";
import TutorPage from "../screens/student/TutorPage";
import TutorSelect from "../screens/student/TutorSelect";
import SessionRequest from "../screens/student/SessionRequest";
import StudentDB from "../screens/student/StudentDB";
import SignUpScreen from "../screens/main/SignUpScreen";
import LoginScreen from "../screens/main/LoginScreen";
import TutorLogin from "../screens/tutor/TutorLogin";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import BottomNavigation from "./BottomNavigation";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../components/atoms/Header";
import OptionsScreen from "../screens/main/OptionsScreen";

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
    
            }}
          >
            <RootStack.Screen
              name="Options Screen"
              component={OptionsScreen}
              options={{
                headerMode: "none",
                cardStyle: {
                  backgroundColor: "rgba(0,0,0,0)",
                },
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
        name="TutorLogin"
        component={TutorLogin}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordReset"
        component={PasswordReset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TutorPage"
        component={TutorPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Select a tutor"
        component={TutorSelect}
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
