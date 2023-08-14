import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

import { Padding, Color, FontFamily, FontSize } from "../../GlobalStyles";

const AppLogo = () => {
  return (
    <View style={[styles.topAppBar, styles.topAppBarFlexBox]}>
      <Text style={styles.headline}>
        <Text style={styles.emcar}>{`EMCAR | `}</Text>
        <Text style={styles.toLearn}>to learn</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topAppBarFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  emcar: {
    color: Color.gray_100,
  },
  toLearn: {
    color: Color.materialThemeSysLightPrimary,
  },
  headline: {
    lineHeight: 32,
    fontFamily: FontFamily.title3,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.materialThemeHeadlineSmall_size,
    alignSelf: "stretch",
    flex: 1,
  },
  topAppBar: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_6xl,
  },
});

export default AppLogo;
