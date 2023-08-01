import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontFamily } from '../../GlobalStyles';

const SocialLoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/Microsoft.png')} // Replace with the correct path to "microsoft.png"
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>Sign in with Microsoft</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#ccc'
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 24, // Adjust the width and height as needed
    height: 24,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: '500',
  },
});

export default SocialLoginButton;
