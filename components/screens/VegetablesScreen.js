import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import getImagesAPI from "../api/imageapi";

const VegetablesScreen = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const response = await getImagesAPI.getImages();
    setImages(response.data);
  };

  const getImage = (number) => images[0].products[number].product_img;

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
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("MeatScreen")}
      >
        <View>
          <Image
            source={require("../../assets/vegetables.png")}
            style={styles.mainImage}
          />
          <View style={styles.imageHeaderContainer}>
            <Text style={styles.imageHeader1}>20%</Text>
            <Text style={styles.imageHeader2}>Discount</Text>
          </View>
          <View style={styles.dotsMiddle}>
            <Image
              source={require("../../assets/dotsmiddle.png")}
              style={styles.dotsImage}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.threeRows}>
        <View style={styles.firstRow}>
          <Image
            source={images.length > 0 ? { uri: getImage(0) } : {}}
            style={styles.firstRowImageOne}
          />
          <Image
            source={images.length > 0 ? { uri: getImage(1) } : {}}
            style={styles.firstRowImageTwo}
          />
        </View>
        <View style={styles.secondRow}>
          <Image
            source={require("../../assets/pineapple.png")}
            style={styles.secondRowImage}
          />
          <Text style={styles.pineappleText}>Lorem ipsum</Text>
        </View>
        <View style={styles.thirdRow}>
          <Image
            source={images.length > 0 ? { uri: getImage(2) } : {}}
            style={styles.thirdRowImageOne}
          />
          <Image
            source={images.length > 0 ? { uri: getImage(3) } : {}}
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
  imageHeaderContainer: {
    position: "absolute",
    top: "30%",
    left: "10%",
  },
  imageHeader1: {
    fontSize: 48,
    color: "#fff",
  },
  imageHeader2: {
    fontSize: 20,
    color: "#fff",
  },
  dotsMiddle: {
    position: "absolute",
    top: 230,
    left: 130,
  },
  dotsImage: {
    height: 14,
    resizeMode: "contain",
  },
  pineappleText: {
    position: "absolute",
    top: 36,
    left: 35,
    fontSize: 16,
  },
});
