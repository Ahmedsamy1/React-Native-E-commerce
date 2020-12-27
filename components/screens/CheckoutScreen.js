import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

import { getTotal } from "../Functionality/CartHandler";

const win = Dimensions.get("window");

const BasketScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("MeatScreen")}
        >
          <View style={styles.icon}>
            <Image source={require("../../assets/arrowleftblue.png")} />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.title}>Checkout</Text>
        <View style={styles.icon}>
          <Image
            source={require("../../assets/arrowleftblue.png")}
            style={styles.iconHidden}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.top}>Total</Text>
        <Text style={styles.bottom}>EGP {getTotal()}</Text>
      </View>

      <View style={styles.btn}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 55,
  },
  icon: {
    paddingLeft: 30,
  },
  iconHidden: {
    opacity: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 200,
  },
  title: {
    fontSize: 20,
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  top: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 15,
  },
  bottom: {
    fontSize: 30,
    textAlign: "center",
  },
  btn: {
    width: win.width * 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 24,
  },
});
