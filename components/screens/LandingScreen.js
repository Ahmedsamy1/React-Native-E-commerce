import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native";

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("BasketScreen")}
      >
        <View style={styles.container2}>
          <Image source={require("../../assets/mask.png")} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: "#D95500",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
