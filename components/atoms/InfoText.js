import {Text} from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";


const InfoText = () => {
  
  return (
      <Text style={[styles.title, styles.titleTypo]}>
        Fill out the form to let the tutor know how they can assist you.
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
