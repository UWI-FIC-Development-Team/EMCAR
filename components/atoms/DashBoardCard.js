import { Feather } from "@expo/vector-icons";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../../GlobalStyles";

const DashBoardCard = ({
  title,
  children,
  onPress,
  showTitle,
  showSeeAll,
  showIcon,
  iconName,
  count,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.content, styles.listSpaceBlock]}>
        {showTitle ? <Text style={styles.headline}>{title}</Text> : null}
        {showSeeAll ? (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.headline2}>See all</Text>
          </TouchableOpacity>
        ) : null}
        {showIcon ? (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.icon}>
              <Feather name={iconName} size={24} color="#006A6A" />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={[styles.list, styles.listSpaceBlock]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    backgroundColor: "#ECFDF5",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  listSpaceBlock: {
    paddingHorizontal: 8,
    alignSelf: "stretch",
  },

  headline: {
    textAlign: "left",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    lineHeight: 24,
    fontSize: 16,
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  headline2: {
    textAlign: "left",
    color: "#006A6A",
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    alignSelf: "stretch",
    textDecorationLine: "underline",
  },
  content: {
    paddingVertical: Padding.p_mini,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  list: {
    flex: 1,
  },
  container: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    marginTop: 8,
    paddingVertical: 8,
  },
});

export default DashBoardCard;
