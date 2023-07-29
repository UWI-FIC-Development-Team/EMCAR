import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Button } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SnackbarPasswordReset from "../../components/SnackbarPasswordReset";
import { Padding, Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

const PasswordReset = () => {
  const navigation = useNavigation();
  const [buttonVisible, setButtonVisible] = useState(false);

  const openButton = useCallback(() => {
    setButtonVisible(true);
  }, []);

  const closeButton = useCallback(() => {
    setButtonVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.passwordReset, styles.topAppBarSpaceBlock]}>
        <View style={[styles.topAppBar, styles.topAppBarSpaceBlock]}>
          <Button
            style={[styles.leadingIcon, styles.iconLayout]}
            radius="0"
            iconPosition="left"
            type="clear"
            icon={{ name: "chevron-left", type: "material-community" }}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headline}>Forgot Password</Text>
          <View style={[styles.trailingIcon, styles.iconLayout]}>
            <View style={[styles.container, styles.buttonFlexBox]}>
              <View style={styles.stateLayer}>
                <Image
                  style={styles.iconsaccountCircleFilled24}
                  contentFit="cover"
                  source={require("../../assets/iconsaccount-circle-filled-24px.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.buildingBlocksHeadlineParent}>
            <View style={styles.buildingBlocksHeadline}>
              <Text style={[styles.title, styles.titleTypo]}>
                Provide your email address attached to your account for a
                temporary password.
              </Text>
            </View>
            <TextInput
              style={styles.textField}
              placeholder="Username/Email"
              keyboardType="email-address"
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor="#3f4948"
            />
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonFlexBox]}
            activeOpacity={0.2}
            onPress={openButton}
          >
            <View style={styles.stateLayer1}>
              <Text style={[styles.labelText, styles.titleTypo]}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonVisible}>
        <View style={styles.buttonOverlay}>
          <Pressable style={styles.buttonBg} onPress={closeButton} />
          <SnackbarPasswordReset onClose={closeButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  topAppBarSpaceBlock: {
    paddingHorizontal: Padding.p_6xl,
    alignItems: "center",
  },
  iconLayout: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    textAlign: "center",
  },
  leadingIcon: {
    justifyContent: "center",
  },
  headline: {
    fontSize: FontSize.materialThemeTitleLarge_size,
    lineHeight: 28,
    color: Color.materialThemeSysLightOnSurface,
    marginLeft: 6,
    textAlign: "center",
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    flex: 1,
  },
  iconsaccountCircleFilled24: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    display: "none",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    overflow: "hidden",
    flexDirection: "row",
  },
  trailingIcon: {
    marginLeft: 6,
    justifyContent: "center",
  },
  topAppBar: {
    height: 64,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  title: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
    alignSelf: "stretch",
  },
  buildingBlocksHeadline: {
    height: 16,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textField: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    fontSize: FontSize.materialThemeTitleMedium_size,
    marginTop: 68,
    fontFamily: FontFamily.materialThemeHeadlineSmall,
    alignSelf: "stretch",
  },
  buildingBlocksHeadlineParent: {
    height: 140,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  labelText: {
    color: Color.materialThemeSysLightOnPrimary,
    flex: 1,
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  button: {
    backgroundColor: Color.materialThemeSysLightPrimary,
    height: 50,
    marginTop: 221,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 25,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  passwordReset: {
    backgroundColor: Color.materialThemeSysLightBackground,
    width: "100%",
    height: 844,
    paddingVertical: Padding.p_26xl,
    alignItems: "center",
    flex: 1,
  },
});

export default PasswordReset;
