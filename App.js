import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LandingScreen from "./components/screens/LandingScreen";
import BasketScreen from "./components/screens/BasketScreen";
import VanScreen from "./components/screens/VanScreen";
import ThumbsScreen from "./components/screens/ThumbsScreen";
import VegetablesScreen from "./components/screens/VegetablesScreen";
import MeatScreen from "./components/screens/MeatScreen";
import ProductDetailsScreen from "./components/screens/ProductDetailsScreen";
import CheckoutScreen from "./components/screens/CheckoutScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="LandingScreen" component={LandingScreen} />
    <Stack.Screen name="BasketScreen" component={BasketScreen} />
    <Stack.Screen name="VanScreen" component={VanScreen} />
    <Stack.Screen name="ThumbsScreen" component={ThumbsScreen} />
    <Stack.Screen name="VegetablesScreen" component={VegetablesScreen} />
    <Stack.Screen name="MeatScreen" component={MeatScreen} />
    <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D95500",
    alignItems: "center",
    justifyContent: "center",
  },
});
