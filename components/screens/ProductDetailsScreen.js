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

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image
          source={require("../../assets/arrowleftblue.png")}
          style={styles.iconLeft}
        />
        <Text style={styles.pageHeader}>Lorem ipsum</Text>
        <View style={styles.rightIcons}>
          <View>
            <Image
              source={require("../../assets/searchicon.png")}
              style={styles.iconRight}
            />
          </View>
          <Image
            source={require("../../assets/carticon.png")}
            style={styles.iconRight2}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContaienr}>
          <Image
            source={require("../../assets/meatsmall.jpg")}
            style={styles.productImage}
          />
          <View style={styles.textContaienr}>
            <Text style={[styles.text, styles.textFirst]}>Lorem ipsum</Text>
            <Text style={[styles.text, styles.textSecond]}>1KG</Text>
            <Text style={[styles.text, styles.textThird]}>EGP 350</Text>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={[styles.textFirst, styles.qtyText]}>QTY</Text>
        <View style={styles.qtyGroup}>
          <Image
            style={styles.qtyImagesFirst}
            source={require("../../assets/addiconblack.png")}
          />
          <Text style={styles.qtyAmount}>3</Text>
          <Image
            style={styles.qtyImagesSecond}
            source={require("../../assets/minusiconblack.png")}
          />
        </View>
      </View>
      <View style={styles.description}>
        <Text style={[styles.textFirst, styles.qtyText]}>Total</Text>
        <Text style={[styles.textFirst, styles.orangeText]}>EGP 700</Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus cum, non pariatur est repellendus, quisquam quis rerum
          repudiandae placeat, dolorem dicta laboriosam cumque odit
          reprehenderit aut illum eum dolorum. Dolorem.
        </Text>
      </View>
      <TouchableWithoutFeedback>
        <Text style={styles.btn}>ADD TO CART</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default VegetablesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 55,
    paddingBottom: 55,
  },
  pageHeader: {
    color: "#2B88C9",
    fontSize: 24,
    marginLeft: 30,
  },
  rightIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconLeft: {
    height: 14,
    width: 7,
  },
  iconRight: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  iconRight2: {
    width: 21,
    height: 21,
    marginRight: 0,
  },
  imageContaienr: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    textAlign: "center",
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  textFirst: {
    fontSize: 24,
    marginBottom: 10,
  },
  textSecond: {
    fontSize: 28,
    marginBottom: 10,
  },
  textThird: {
    fontSize: 32,
    marginBottom: 10,
  },
  description: {
    flexDirection: "row",
    width: 200,
    marginLeft: 20,
    alignItems: "center",
    marginTop: 10,
  },
  qtyGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 90,
    marginTop: -10,
    borderTopColor: "#dbdbdb",
    borderTopWidth: 1,
    borderRightColor: "#dbdbdb",
    borderRightWidth: 1,
    borderLeftColor: "#dbdbdb",
    borderLeftWidth: 1,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    padding: 5,
  },
  qtyText: {
    marginRight: "auto",
  },
  qtyAmount: {
    fontSize: 24,
  },
  qtyImagesFirst: {
    height: 20,
    width: 20,
  },
  qtyImagesSecond: {
    width: 20,
  },
  orangeText: {
    color: "#D95500",
  },
  descriptionText: {
    marginLeft: 20,
    marginRight: 20,
    color: "#C1C1C1",
  },
  btn: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    marginTop: 30,
    backgroundColor: "#D95500",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 5,
  },
});
