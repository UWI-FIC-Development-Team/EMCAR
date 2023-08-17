import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import StudentDB from "../screens/student/StudentDB";
import Header from "../components/atoms/Header";
import { getHeaderTitle } from "@react-navigation/elements";
import SessionScreen from "../screens/student/SessionScreen";
import TutorDB from "../screens/tutor/TutorDB";
import { AuthContext } from "../context/AuthContextProvider";
import TutorProfileScreen from "../screens/tutor/TutorProfileScreen";
import SettingsScreen from "../screens/main/SettingsScreen";
import { FontFamily } from "../GlobalStyles";
const BottomTabs = createBottomTabNavigator();

function BottomNavigation() {
  const { isTutor } = useContext(AuthContext);

  return (
    <BottomTabs.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return <Header title={title} backButtomShown={false} />;
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Session") {
            iconName = focused ? "folder" : "folder";
          } else if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          width: "100%",
        },
        tabBarActiveTintColor: "#006A6A",
        tabBarInactiveTintColor: "#3F4948",

        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FontFamily.materialThemeTitleMedium,
          fontWeight: "500",
          marginBottom: 10,
        },
      })}
    >
      {isTutor ? (
        <BottomTabs.Screen name="Profile" component={TutorProfileScreen} />
      ) : (
        <BottomTabs.Screen name="Session" component={SessionScreen} />
      )}
      {isTutor ? (
        <BottomTabs.Screen name="Dashboard" component={TutorDB} />
      ) : (
        <BottomTabs.Screen name="Dashboard" component={StudentDB} />
      )}
      {isTutor ? (
        <BottomTabs.Screen name="Settings" component={SettingsScreen} />
      ) : (
        <BottomTabs.Screen name="Settings" component={SettingsScreen} />
      )}
    </BottomTabs.Navigator>
  );
}

export default BottomNavigation;
