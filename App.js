import reactotron from "./config/ReactotronConfig";
import { AuthProvider } from "./context/AuthContextProvider";
import { SessionProvider } from "./context/RequestContextProvider";
import { TutorProvider } from "./context/TutorContextProvider";
import AppNavigator from "./navigation/AppNavigator";

if (__DEV__) reactotron.connect();

const App = () => {
  return (
    <TutorProvider>
      <AuthProvider>
        <SessionProvider>
          <AppNavigator />
        </SessionProvider>
      </AuthProvider>
    </TutorProvider>
  );
};
export default App;
