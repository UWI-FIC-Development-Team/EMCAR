import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { FontFamily } from "../../GlobalStyles";

const AppHeader = ({ showIcon, IconName, title, mode, goBack }) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style="auto" backgroundColor="white" />
      <Appbar.Header style={{ backgroundColor: "white" }} mode={mode}>
        {goBack ? (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        ) : null}
        <Appbar.Content
          titleStyle={{
            fontWeight: "600",
            fontFamily: FontFamily.m3LabelMedium,
          }}
          title={title}
        />
        {showIcon ? <Appbar.Action icon={IconName} /> : null}
      </Appbar.Header>
    </>
  );
};

export default AppHeader;
