import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LandingScreen from "./components/screens/LandingScreen";
import BasketScreen from "./components/screens/BasketScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="BasketScreen" component={BasketScreen} />
  </Stack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer >
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
