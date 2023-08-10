import {Text, StyleSheet} from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";


const InfoText = () => {
  
  return (
      <Text style={[styles.title, styles.titleTypo]}>
       No sessions requested at this time. 
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
    color: '#BEC9C8',
  },

});

export default InfoText;
