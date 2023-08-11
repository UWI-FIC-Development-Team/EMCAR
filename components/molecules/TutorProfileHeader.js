import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";

const TutorProfileHeader = () => {
  return (
    <View style={[styles.selectheaderParent, styles.selectheaderFlexBox]}>
      
      <Text style={[styles.headline1, styles.headlineTypo]}>Linda Simon</Text>
      <Text style={[styles.headline1, styles.headlineTypo]}>
        Second year computer science student.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  selectheaderFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  headlineTypo: {
    fontFamily: FontFamily.m3LabelMediumProminent,
    lineHeight: 32,
    marginTop: 16,
    textAlign: "center",
  },
 
  headline: {
    flex: 1,
    fontSize: FontSize.materialThemeTitleLarge_size,
    lineHeight: 28,
    fontFamily: FontFamily.materialThemeBodyLarge,
    marginLeft: 6,
    textAlign: "center",
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  selectheader: {
    height: 64,
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_5xs,
  },
 
  headline1: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    fontFamily: FontFamily.m3LabelMediumProminent,
    lineHeight: 32,
    alignSelf: "stretch",
  },
  
  selectheaderParent: {
    
    backgroundColor: '#ccc',
    padding: Padding.p_xs,
    // flex:1
  },
});

export default TutorProfileHeader;
