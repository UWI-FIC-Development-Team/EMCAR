import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { FontFamily } from "../../GlobalStyles";

const UserProfileHeader = ({ UserName }) => {
  function getFirstCharacter(str) {
    return str.substring(0, 1);
  }

  const intital = getFirstCharacter(UserName);
  return (
    <View style={styles.headlineFlexBox}>
      <Avatar.Text
        size={48}
        label={intital}
        style={{ backgroundColor: "#008183" }}
      />
      <Text style={styles.headline}>{UserName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineFlexBox: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#004F50",
    borderRadius: 10,
  },

  headline: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FontFamily.materialThemeTitleMedium,
    color: "#fff",
    marginLeft: 16,
  },
});

export default UserProfileHeader;
