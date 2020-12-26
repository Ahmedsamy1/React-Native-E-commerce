import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const win = Dimensions.get("window");

const VegetablesScreen = () => {
  const navigation = useNavigation();

  return <View style={styles.container}>
      
  </View>;
};

export default VegetablesScreen;

const styles = StyleSheet.create({
  container: {},
});
