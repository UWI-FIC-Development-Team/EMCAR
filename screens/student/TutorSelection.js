import React, { useState, useCallback, useRef } from "react";
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

const TutorSelection = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // const { current } = useCardAnimation();


  return (
    <ScrollView
      style={styles.studentDb}
    >
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.listDialogParent}>
        <DashBoardCard title={"Available"} showTitle={true}>
          <DashBoardChip iconIsVisible={false} onPress={()=>{navigation.navigate('submit session')}} />
          <DashBoardChip iconIsVisible={false} onPress={()=>{}}/>
          <DashBoardChip iconIsVisible={false} />
        </DashBoardCard>
        <DashBoardCard title={"Unavailable"} showTitle={true}>
          <DashBoardChip iconIsVisible={false} onPress={()=>{}} />
          <DashBoardChip iconIsVisible={false} onPress={()=>{}} />
          <DashBoardChip iconIsVisible={false}/>
        </DashBoardCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  studentDb: {
    width: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingTop: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TutorSelection;