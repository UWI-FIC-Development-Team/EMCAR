import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContextProvider";
import { SessionProvider } from "./context/RequestContextProvider";
import { TutorProvider } from "./context/TutorContextProvider";

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
