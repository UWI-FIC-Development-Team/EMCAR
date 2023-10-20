import { SafeAreaProvider } from "react-native-safe-area-context";
import reactotron from "./config/ReactotronConfig";
import { AuthProvider } from "./context/AuthContextProvider";
import { SessionProvider } from "./context/RequestContextProvider";
import { TutorProvider } from "./context/TutorContextProvider";
import { UserProvider } from "./context/UserContextProvider";
import AppNavigator from "./navigation/AppNavigator";
import { PaperProvider } from "react-native-paper";
if (__DEV__) reactotron.connect();

const App = () => {
  return (
    <PaperProvider>
      <TutorProvider>
        <AuthProvider>
          <SessionProvider>
            <SafeAreaProvider>
              <UserProvider>
                <AppNavigator />
              </UserProvider>
            </SafeAreaProvider>
          </SessionProvider>
        </AuthProvider>
      </TutorProvider>
    </PaperProvider>
  );
};
export default App;
