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
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/meatmain.png")}
          style={styles.mainImage}
        />
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require("../../assets/arrowleft.png")}
          style={styles.iconLeft}
        />
        <Text style={styles.pageHeader}>Meat & Seafood</Text>
        <View style={styles.rightIcons}>
          <View>
            <Image
              source={require("../../assets/searchwhite.png")}
              style={styles.iconRight}
            />
          </View>
          <Image
            source={require("../../assets/cartwhite.png")}
            style={styles.iconRight}
          />
        </View>
      </View>
      <View style={styles.threeRows}>
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Image
              source={require("../../assets/meatsmall.jpg")}
              style={styles.rowImage}
            />
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>Lorem ipsum</Text>
                <Text>1KG</Text>
                <Text>EGP 350</Text>
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
          <View style={styles.rightColumn}>
            <Image
              source={require("../../assets/meatsmall.jpg")}
              style={styles.rowImage}
            />
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>Lorem ipsum</Text>
                <Text>1KG</Text>
                <Text>EGP 350</Text>
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
          <View style={styles.leftColumn}>
            <Image
              source={require("../../assets/meatsmall.jpg")}
              style={styles.rowImage}
            />
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>Lorem ipsum</Text>
                <Text>1KG</Text>
                <Text>EGP 350</Text>
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
          <View style={styles.rightColumn}>
            <Image
              source={require("../../assets/meatsmall.jpg")}
              style={styles.rowImage}
            />
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>Lorem ipsum</Text>
                <Text>1KG</Text>
                <Text>EGP 350</Text>
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
          <View style={styles.leftColumn}>
            <Image
              source={require("../../assets/meatsmall.jpg")}
              style={styles.rowImage}
            />
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>Lorem ipsum</Text>
                <Text>1KG</Text>
                <Text>EGP 350</Text>
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
          <View style={styles.rightColumn}>
            <Image
              source={require("../../assets/meatsmall.jpg")}
              style={styles.rowImage}
            />
            <View style={styles.imageText}>
              <View style={styles.leftText}>
                <Text>Lorem ipsum</Text>
                <Text>1KG</Text>
                <Text>EGP 350</Text>
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

export default VegetablesScreen;

const styles = StyleSheet.create({
  container: {},
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
});
