import {Text, StyleSheet} from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";


const InfoText = () => {
  
  return (
      <Text style={[styles.title, styles.titleTypo]}>
        No Request yet
      </Text>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.materialThemeLabelLarge_size,
    textAlign: "center",
  },

  title: {
    color: Color.materialThemeSysLightOnSurfaceVariant,
  },

});

export default InfoText;
