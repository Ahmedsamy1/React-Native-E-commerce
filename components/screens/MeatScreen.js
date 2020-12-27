import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import getImagesAPI from "../api/imageapi";

const win = Dimensions.get("window");

const MeatScreen = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const response = await getImagesAPI.getImages();
    setImages(response.data);
  };

  const getImage = (number) => {
    return images[2].products[number].product_img;
  };

  const getName = (number) => {
    return images[2].products[number].name;
  };

  const getPrice = (number) => {
    return images[2].products[number].price;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/meatmain.png")}
          style={styles.mainImage}
        />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VegetablesScreen")}
        >
          <View style={styles.largerIcon}>
            <Image
              source={require("../../assets/arrowleft.png")}
              style={styles.iconLeft}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.pageHeader}>Meat & Seafood</Text>
        <View style={styles.rightIcons}>
          <View>
            <Image
              source={require("../../assets/searchwhite.png")}
              style={styles.iconRight}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("CheckoutScreen")}
          >
            <Image
              source={require("../../assets/cartwhite.png")}
              style={styles.iconRight}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.threeRows}>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                uri: getImage(0),
                price: getPrice(0),
                name: getName(0),
              })
            }
          >
            <View style={styles.leftColumn}>
              <Image
                source={images.length > 0 ? { uri: getImage(0) } : {}}
                style={styles.rowImage}
              />
              <View style={styles.imageText}>
                <View style={styles.leftText}>
                  <Text>{images.length > 0 && getName(0)}</Text>
                  <Text>1KG</Text>
                  <Text>{images.length > 0 && getPrice(0)}</Text>
                </View>
                <View style={styles.rightText}>
                  <View>
                    <Image
                      source={require("../../assets/circle.png")}
                      style={styles.circleLeft}
                    />
                    <View style={styles.arrowContainer}>
                      <Image
                        source={require("../../assets/addicon.png")}
                        style={styles.arrow}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.rightColumn}>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("ProductDetailsScreen", {
                  uri: getImage(1),
                  price: getPrice(1),
                  name: getName(1),
                })
              }
            >
              <Image
                source={images.length > 0 ? { uri: getImage(1) } : {}}
                style={styles.rowImage}
              />
            </TouchableWithoutFeedback>
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>{images.length > 0 && getName(1)}</Text>
                <Text>1KG</Text>
                <Text>{images.length > 0 && getPrice(1)}</Text>
              </View>
              <View style={styles.rightText}>
                <View>
                  <Image
                    source={require("../../assets/circle.png")}
                    style={styles.circleLeft}
                  />
                  <View style={styles.arrowContainer}>
                    <Image
                      source={require("../../assets/addicon.png")}
                      style={styles.arrow}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                uri: getImage(2),
                price: getPrice(2),
                name: getName(2),
              })
            }
          >
            <View style={styles.leftColumn}>
              <Image
                source={images.length > 0 ? { uri: getImage(2) } : {}}
                style={styles.rowImage}
              />
              <View style={styles.imageText}>
                <View style={styles.leftText}>
                  <Text>{images.length > 0 && getName(2)}</Text>
                  <Text>1KG</Text>
                  <Text>EGP {images.length > 0 && getPrice(2)}</Text>
                </View>
                <View style={styles.rightText}>
                  <View>
                    <Image
                      source={require("../../assets/circle.png")}
                      style={styles.circleLeft}
                    />
                    <View style={styles.arrowContainer}>
                      <Image
                        source={require("../../assets/addicon.png")}
                        style={styles.arrow}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                uri: getImage(3),
                price: getPrice(3),
                name: getName(3),
              })
            }
          >
            <View style={styles.rightColumn}>
              <Image
                source={images.length > 0 ? { uri: getImage(3) } : {}}
                style={styles.rowImage}
              />
              <View style={styles.imageText}>
                <View style={styles.leftText}>
                  <Text>{images.length > 0 && getName(3)}</Text>
                  <Text>1KG</Text>
                  <Text>{images.length > 0 && getPrice(3)}</Text>
                </View>
                <View style={styles.rightText}>
                  <View>
                    <Image
                      source={require("../../assets/circle.png")}
                      style={styles.circleLeft}
                    />
                    <View style={styles.arrowContainer}>
                      <Image
                        source={require("../../assets/addicon.png")}
                        style={styles.arrow}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                uri: getImage(0),
                price: getPrice(0),
                name: getName(0),
              })
            }
          >
            <View style={styles.leftColumn}>
              <Image
                source={images.length > 0 ? { uri: getImage(0) } : {}}
                style={styles.rowImage}
              />
              <View style={styles.imageText}>
                <View style={styles.leftText}>
                  <Text>{images.length > 0 && getName(0)}</Text>
                  <Text>1KG</Text>
                  <Text>{images.length > 0 && getPrice(0)}</Text>
                </View>
                <View style={styles.rightText}>
                  <View>
                    <Image
                      source={require("../../assets/circle.png")}
                      style={styles.circleLeft}
                    />
                    <View style={styles.arrowContainer}>
                      <Image
                        source={require("../../assets/addicon.png")}
                        style={styles.arrow}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                uri: getImage(1),
                price: getPrice(1),
                name: getName(1),
              })
            }
          >
            <View style={styles.rightColumn}>
              <Image
                source={images.length > 0 ? { uri: getImage(1) } : {}}
                style={styles.rowImage}
              />
              <View style={styles.imageText}>
                <View style={styles.leftText}>
                  <Text>{images.length > 0 && getName(1)}</Text>
                  <Text>1KG</Text>
                  <Text>{images.length > 0 && getPrice(1)}</Text>
                </View>
                <View style={styles.rightText}>
                  <View>
                    <Image
                      source={require("../../assets/circle.png")}
                      style={styles.circleLeft}
                    />
                    <View style={styles.arrowContainer}>
                      <Image
                        source={require("../../assets/addicon.png")}
                        style={styles.arrow}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Text title="Learn More" style={styles.buttonLeft}>
          Sort By
        </Text>
        <Text title="Learn More" style={styles.buttonRight}>
          Filter
        </Text>
      </View>
    </View>
  );
};

export default MeatScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 55,
    paddingBottom: 200,
  },
  pageHeader: {
    color: "#fff",
    fontSize: 24,
  },
  rightIcons: {
    flexDirection: "row",
  },
  iconLeft: {
    height: 14,
    width: 7,
  },
  iconRight: {
    width: 21,
    height: 21,
  },
  mainImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: win.width,
    height: 250,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: win.width * 0.8,
    height: 150,
    borderColor: "#D5D5D5",
    alignSelf: "center",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  rowImage: {
    height: "60%",
    width: 100,
    resizeMode: "contain",
    marginBottom: 5,
  },
  leftColumn: {
    width: win.width * 0.4,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#D5D5D5",
    paddingTop: 10,
    paddingBottom: 20,
  },
  rightColumn: {
    width: win.width * 0.4,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#D5D5D5",
    paddingTop: 10,
    paddingBottom: 20,
  },
  imageText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: win.width * 0.3,
  },
  circleLeft: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  circleRight: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  threedots: {
    height: 14,
    resizeMode: "contain",
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    height: 14,
    width: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: win.width,
    justifyContent: "space-between",
  },
  buttonLeft: {
    backgroundColor: "#D95500",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 20,
    fontSize: 18,
  },
  buttonRight: {
    backgroundColor: "#D95500",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomRightRadius: 20,
    fontSize: 18,
  },
  largerIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
});
