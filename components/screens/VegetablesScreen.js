import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const VegetablesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image
          source={require("../../assets/menuicon.png")}
          style={styles.iconLeft}
        />
        <View style={styles.rightIcons}>
          <Image
            source={require("../../assets/searchicon.png")}
            style={styles.iconRight}
          />
          <Image
            source={require("../../assets/carticon.png")}
            style={styles.iconRight}
          />
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/vegetables.png")}
          style={styles.mainImage}
        />
      </View>
      <View style={styles.threeRows}>
        <View style={styles.firstRow}>
          <Image
            source={require("../../assets/buffet.png")}
            style={styles.firstRowImageOne}
          />
          <Image
            source={require("../../assets/dish.png")}
            style={styles.firstRowImageTwo}
          />
        </View>
        <View style={styles.secondRow}>
          <Image
            source={require("../../assets/pineapple.png")}
            style={styles.secondRowImage}
          />
        </View>
        <View style={styles.thirdRow}>
          <Image
            source={require("../../assets/oranges.png")}
            style={styles.thirdRowImageOne}
          />
          <Image
            source={require("../../assets/strawberry.png")}
            style={styles.thirdRowImageTwo}
          />
        </View>
      </View>
    </View>
  );
};

export default VegetablesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
  },
  rightIcons: {
    flexDirection: "row",
  },
  iconLeft: {
    width: 28,
    height: 14,
  },
  iconRight: {
    width: 21,
    height: 21,
    marginLeft: 10,
  },
  mainContainer: {
    marginTop: 20,
  },
  mainImage: {
    height: 280,
    width: "100%",
    resizeMode: "contain",
  },
  threeRows: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  firstRowImageOne: {
    width: 160,
    height: 160,
    marginRight: 5,
  },
  firstRowImageTwo: {
    width: 160,
    height: 160,
  },
  secondRowImage: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
    marginTop: 5,
  },
  thirdRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  thirdRowImageOne: {
    width: 160,
    height: 160,
    marginRight: 5,
  },
  thirdRowImageTwo: {
    width: 160,
    height: 160,
  },
});
