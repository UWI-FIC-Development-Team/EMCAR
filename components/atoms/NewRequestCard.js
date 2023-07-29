import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import DashBoardChip from "./DashBoardChip";
import {
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DashBoardCard = ({ title, children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, styles.containerFlexBox]}>
          {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  container: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,

    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    backgroundColor: '#D3E4FF',
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal:12
  },
  containerFlexBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:72
    
  }
});

export default DashBoardCard;
