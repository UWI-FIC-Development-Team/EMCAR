import React, { useState, useCallback,useRef } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  Border,
  FontFamily,
  Padding,
  Color,
  FontSize,
} from "../../GlobalStyles";
import DashBoardCard from "../../components/atoms/DashBoardCard";
import DashBoardChip from "../../components/atoms/DashBoardChip";
import OptionSheet from "../../components/OptionSheet";
// import { useCardAnimation } from "@react-navigation/stack";





const TutorSelect = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);
  
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // const { current } = useCardAnimation();

 

  

  const handleOptionsScreen = () => {

  navigation.navigate("Options Screen");
  };

  


  return (
    <ScrollView style={styles.studentDb}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.listDialogParent}>
        <DashBoardCard title={"Available"} showTitle={true}>
          <DashBoardChip onPress={handleOptionsScreen}/>
          <DashBoardChip onPress={handleOptionsScreen} />
          <DashBoardChip />
        </DashBoardCard>
        <DashBoardCard title={"Unavailable"} showTitle={true}>
          <DashBoardChip onPress={handleOptionsScreen}/>
          <DashBoardChip onPress={handleOptionsScreen} />
          <DashBoardChip />
        </DashBoardCard>
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  studentDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: 20,
    flex: 1,
    backgroundColor: Color.materialThemeSysLightBackground,
  },
});

export default TutorSelect;
