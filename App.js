// import React, { useState, useEffect } from "react";
// import { Platform, SafeAreaView } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Ionicons } from "@expo/vector-icons"; 


// import Home from "./src/Home";
// import Completed from "./src/Completed";
// import TodoDetails from "./src/TodoDetails";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


// export default function App() {
//   const [todos, setTodos] = useState([]);

 
//   useEffect(() => {
//     const loadTodos = async () => {
//       const saved = await AsyncStorage.getItem("todos");
//       if (saved) setTodos(JSON.parse(saved));
//     };
//     loadTodos();
//   }, []);


//   useEffect(() => {
//     AsyncStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

 
//   function HomeStack() {
//     return (
//       <Stack.Navigator screenOptions={{ headerShown: Platform.OS === "ios" }}>
//         <Stack.Screen name="Home">
//           {(props) => <Home {...props} todos={todos} setTodos={setTodos} />}
//         </Stack.Screen>
//         <Stack.Screen name="TodoDetails" component={TodoDetails} />
//       </Stack.Navigator>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             headerShown: Platform.OS === "ios",
//             tabBarIcon: ({ color, size }) => {
//               let iconName;
//               if (route.name === "Todos") {
//                 iconName = "home";
//               } else if (route.name === "Completed") {
//                 iconName = "checkmark-done";
//               }
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: "black",
//             tabBarInactiveTintColor: "gray",
//           })}
//         >
//           <Tab.Screen name="Todos" component={HomeStack} />
//           <Tab.Screen name="Completed">
//             {() => <Completed todos={todos} />}
//           </Tab.Screen>
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }




import React, { useState, useEffect } from "react";
import { SafeAreaView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/Router/Router";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const saved = await AsyncStorage.getItem("todos");
      if (saved) setTodos(JSON.parse(saved));
    };
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Router todos={todos} setTodos={setTodos} />
      </NavigationContainer>
    </SafeAreaView>
  );
}
