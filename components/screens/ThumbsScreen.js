import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ThumbsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/thumbs.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Lorem ipsum</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque
          sed magni dignissimos commodi, doloremque animi. Hic suscipit repellat
          quia magni non, odit numquam rerum ipsum perspiciatis delectus alias
          inventore?
        </Text>
      </View>

      <View style={styles.bottomRow}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VanScreen")}
        >
          <View>
            <Image
              source={require("../../assets/circle.png")}
              style={styles.circleLeft}
            />
            <View style={styles.arrowContainer}>
              <Image
                source={require("../../assets/arrowleft.png")}
                style={styles.arrow}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Image
          source={require("../../assets/dotsright.png")}
          style={styles.threedots}
        />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VegetablesScreen")}
        >
          <View>
            <Image
              source={require("../../assets/circularbutton.png")}
              style={styles.circleRight}
            />
            <View style={styles.arrowContainer}>
              <Text style={styles.startedText}>Get Started</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ThumbsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 200,
    paddingBottom: 50,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  textContainer: {
    width: "80%",
    textAlign: "center",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
    paddingTop: 20,
    lineHeight: 25
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
  },
  circleLeft: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  circleRight: {
    height: 50,
    width: 103,
    resizeMode: "contain",
  },
  threedots: {
    height: 14,
    resizeMode: "contain"
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    height: 14,
    width: 7,
  },
  startedText: {
    color: '#fff'
  }
});
