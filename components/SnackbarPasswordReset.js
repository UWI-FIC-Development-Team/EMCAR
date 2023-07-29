import * as React from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const SnackbarPasswordReset = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.snackbarPasswordReset}>
      <TouchableOpacity
        style={styles.snackbar}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("OnboardingScreen2")}
      >
        <Text style={styles.label}>Temporary password has been sent.</Text>
        <View style={[styles.closeAffordance, styles.containerFlexBox]}>
          <View style={[styles.container, styles.containerFlexBox]}>
            <View style={[styles.stateLayer, styles.containerFlexBox]}>
              <Image
                style={styles.iconlylightOutlinesend}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesend.png")}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    flex: 1,
    fontSize: FontSize.materialThemeLabelLarge_size,
    lineHeight: 20,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    color: Color.materialThemeSysLightInverseOnSurface,
    textAlign: "left",
    height: 20,
  },
  iconlylightOutlinesend: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
  },
  closeAffordance: {
    width: 48,
    justifyContent: "center",
    height: 48,
  },
  snackbar: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.materialThemeSysLightPrimary,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 328,
    paddingLeft: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 48,
  },
  snackbarPasswordReset: {
    paddingHorizontal: 0,
    paddingVertical: 35,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SnackbarPasswordReset;
