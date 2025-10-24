import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import StackNavigator from "./StackNavigator";
import Completed from "../Completed";

const Tab = createBottomTabNavigator();

export default function Router({ todos, setTodos }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: Platform.OS === "ios",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Todos") iconName = "home";
          else if (route.name === "Completed") iconName = "checkmark-done";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Todos">
        {() => <StackNavigator todos={todos} setTodos={setTodos} />}
      </Tab.Screen>
      <Tab.Screen name="Completed">
        {() => <Completed todos={todos} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
