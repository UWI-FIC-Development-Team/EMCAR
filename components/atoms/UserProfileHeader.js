import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const UserProfileHeader = ({UserName, path}) => {
  return (
    <View style={[styles.stateLayer, styles.headlineFlexBox]}>
      <Image
          style={styles.imageStyle}
          contentFit="cover"
          source={{uri:path}}
                />
      <Text style={[styles.headline, styles.headlineFlexBox]}>
        {UserName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  imageStyle:{
    height:60,
    width:60
  },
  headlineFlexBox: {
    width:'100%',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:12
  },

  headline: {
    fontSize: FontSize.materialThemeTitleLarge_size,
    lineHeight: 28,
    fontFamily: FontFamily.workSansMedium,
    color: Color.materialThemeSysLightOnSurface,
    marginLeft: 16,
  },
  stateLayer: {
    borderRadius:10,
    backgroundColor: Color.materialThemeSysLightSecondaryContainer,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    overflow: "hidden",
  },
});

export default UserProfileHeader;
