import { AuthProvider } from "./context/AuthContextProvider";
import { SessionProvider } from "./context/RequestContextProvider";
import { TutorProvider } from "./context/TutorContextProvider";
import AppNavigator from "./navigation/AppNavigator";
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
