import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TimeAndDateCard = ({
  day,
  startWorking,
  finishWorking,
  showIcon,
  onPress,
}) => {
  // Convert Firestore timestamps to human-readable format
  const formattedStartTime = startWorking.toDate().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const formattedEndTime = finishWorking.toDate().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <View style={[styles.stateLayerOverlay, styles.contentParentFlexBox]}>
      <Text style={styles.headline}>{day}</Text>

      <View style={[styles.contentParent, styles.contentParentFlexBox]}>
        <View style={styles.content}>
          <Text style={[styles.headline1, styles.headlineTypo]}>
            {formattedStartTime}
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.headline2, styles.headlineTypo]}>
            {formattedEndTime}
          </Text>
        </View>
        {showIcon ? (
          <TouchableOpacity style={{ marginLeft: 8 }} onPress={onPress}>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headlineTypo: {
    textAlign: "right",
    color: Color.subtleDark,
    fontFamily: FontFamily.materialThemeBodyLarge,
    fontSize: FontSize.materialThemeLabelMedium_size,
    display: "flex",
    lineHeight: 24,
    alignItems: "center",
  },
  headline: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: FontFamily.materialThemeTitleMedium,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
  },
  mdiArrowDropDownIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },

  headline1: {
    width: 89,
  },
  headline2: {
    width: 82,
  },
  contentParent: {
    width: 193,
  },
  stateLayerOverlay: {
    alignSelf: "stretch",
    borderWidth: 2,
    borderBottomColor: "#E6E6E6",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    backgroundColor: Color.white,
    padding: 12,
  },
});

export default TimeAndDateCard;
