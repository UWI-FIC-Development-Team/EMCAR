import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoadingDialog = ({ visible, onDismiss }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
      }}
    >
      <ActivityIndicator size="large" color="#006a6a" />
    </View>
  );
};

export default LoadingDialog;
