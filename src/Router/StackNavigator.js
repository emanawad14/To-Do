import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import Home from "../Home";
import TodoDetails from "../TodoDetails";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ todos, setTodos }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: Platform.OS === "ios" }}>
      <Stack.Screen name="Home">
        {(props) => <Home {...props} todos={todos} setTodos={setTodos} />}
      </Stack.Screen>
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
    </Stack.Navigator>
  );
}
