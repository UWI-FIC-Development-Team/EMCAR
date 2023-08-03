import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContextProvider";
import { SessionProvider } from "./context/RequestContextProvider";

const App = () => {
  return (
    <AuthProvider>
      <SessionProvider>
        <AppNavigator />
      </SessionProvider>
    </AuthProvider>
  );
};
export default App;
