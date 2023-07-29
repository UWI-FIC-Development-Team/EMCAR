import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContextProvider";

const App = () => {

  return (
    
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
    
  )
};
export default App;
