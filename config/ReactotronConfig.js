import { NativeModules } from "react-native";
import reactotron from "reactotron-react-native";

const { scriptURL } = NativeModules.SourceCode;
const hostName = scriptURL.split("://")[1].split(":")[0]; // Replace [0] with the appropriate index
reactotron.configure({ host: hostName }).useReactNative();
export default reactotron;
