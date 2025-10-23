
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./style";

export default function Home() {
    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddTodo = () => {
    if (title.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Done"
      ? todos.filter((todo) => todo.done)
      : todos.filter((todo) => !todo.done);

  return (
    <View style={styles.container}>
     
      <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 50 }}>
        TODO APP
      </Text>

     
      <TextInput
        placeholder="Enter Todo Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Enter Todo Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      
      <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>

     
      <View style={styles.dividerLine} />

     
      <View style={styles.filterContainer}>
        {["All", "Pending", "Done"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={
              filter === tab ? styles.activeFilterBtn : styles.filterBtn
            }
            onPress={() => setFilter(tab)}
          >
            <Text
              style={
                filter === tab
                  ? styles.activeFilterText
                  : styles.filterText
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
     <FlatList
  data={filteredTodos}
  keyExtractor={(item) => item.id}
  style={styles.todosContainer}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => toggleTodo(item.id)}>
      <View
        style={{
          backgroundColor: item.done ? "#333" : "#000", 
          padding: 15,
          borderRadius: 10,
          marginVertical: 8,
          width: "95%",
          alignSelf: "center",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 3, 
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textDecorationLine: item.done ? "line-through" : "none",
          }}
        >
          {item.title}
        </Text>
        {item.description ? (
          <Text
            style={{
              color: "#ccc",
              fontSize: 14,
              marginTop: 4,
              textDecorationLine: item.done ? "line-through" : "none",
            }}
          >
            {item.description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  )}
/>

    </View>
  );
}
