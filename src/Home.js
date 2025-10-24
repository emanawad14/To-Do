import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

export default function Home({ navigation, todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTodo = () => {
    if (title.trim() === "") {
      Alert.alert("Error", "Please enter a todo title");
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      done: false,
    };
    setTodos([newTodo, ...todos]);
    setTitle("");
    setDescription("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const filtered =
    filter === "All"
      ? todos
      : filter === "Done"
      ? todos.filter((t) => t.done)
      : todos.filter((t) => !t.done);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos </Text>

      <TextInput
        placeholder="Enter title..."
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Enter description..."
        style={[styles.input, { height: 70 }]}
        value={description}
        multiline
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>

      <View style={styles.filterContainer}>
        {["All", "Pending", "Done"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={filter === tab ? styles.activeFilterBtn : styles.filterBtn}
            onPress={() => setFilter(tab)}
          >
            <Text
              style={
                filter === tab ? styles.activeFilterText : styles.filterText
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TodoDetails", { todo: item })}
          >
            <View
              style={[
                styles.todoItem,
                {
                  backgroundColor: item.done ? "#2f2f2f" : "#1a1a1a",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    textDecorationLine: item.done ? "line-through" : "none",
                  }}
                >
                  {item.title}
                </Text>
                {item.description ? (
                  <Text
                    style={{
                      color: "#ccc",
                      marginTop: 4,
                      fontSize: 14,
                      textDecorationLine: item.done ? "line-through" : "none",
                    }}
                  >
                    {item.description}
                  </Text>
                ) : null}
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                  <Ionicons
                    name={item.done ? "arrow-undo-circle" : "checkmark-circle"}
                    size={26}
                    color={item.done ? "#4CAF50" : "#00C853"}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                  <Ionicons name="trash" size={26} color="#FF3B30" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
