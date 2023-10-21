import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";

const AppHeader = ({ showIcon, IconName, title, mode, goBack }) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style="auto" backgroundColor="white" />
      <Appbar.Header style={{ backgroundColor: "white" }} mode={mode}>
        {goBack ? (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        ) : null}
        <Appbar.Content title={title} />
        {showIcon ? <Appbar.Action icon={IconName} /> : null}
      </Appbar.Header>
    </>
  );
};

export default AppHeader;
