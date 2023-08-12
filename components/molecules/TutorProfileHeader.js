import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
import { Avatar } from "react-native-paper";

const TutorProfileHeader = ({ name }) => {

  function extractInitials(fullName) {
  if (!fullName) {
    return {
      firstNameInitial: '',
      lastNameInitial: ''
    };
  }

  const [firstName = '', lastName = ''] = fullName.split(' ');
  return {
    firstNameInitial: firstName.charAt(0),
    lastNameInitial: lastName.charAt(0)
  };
}

const { firstNameInitial, lastNameInitial } = extractInitials(name);



  return (
    <View style={[styles.selectheaderParent, styles.selectheaderFlexBox]}>
      <Avatar.Text
        style={{ backgroundColor: "#006A6A" }}
        size={100}
        label={`${firstNameInitial}${lastNameInitial}`}
      />
      <Text style={[styles.headline1, styles.headlineTypo]}>{name}</Text>
      <Text style={[styles.headline, styles.headlineTypo]}>
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
    fontSize: 16,
    lineHeight: 28,
    fontFamily: FontFamily.materialThemeBodyLarge,
    textAlign: "center",
    color: "#61646B",
  },

  headline1: {
    fontSize: 32,
    fontWeight: "700",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    fontFamily: FontFamily.m3LabelMediumProminent,
    lineHeight: 32,
    alignSelf: "stretch",
  },

  selectheaderParent: {
    backgroundColor: "#fff",
    padding: Padding.p_xs,
    marginBottom: 12,
    // flex:1
  },
});

export default TutorProfileHeader;
