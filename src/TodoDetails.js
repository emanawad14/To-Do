
import { View, Text } from "react-native";

export default function TodoDetails({ route }) {
  const { todo } = route.params;

  if (!todo) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#121212",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "teal", fontSize: 30 }}>No todo found </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        paddingTop: 60,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "teal",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Todo Details 
      </Text>

      <View
        style={{
          backgroundColor: "#1f1f1f",
          padding: 20,
          borderRadius: 12,
          shadowColor: "",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 4,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          {todo.title}
        </Text>

        {todo.description ? (
          <Text style={{ fontSize: 16, color: "#ccc", marginBottom: 15 }}>
            {todo.description}
          </Text>
        ) : (
          <Text style={{ fontSize: 16, color: "#888", marginBottom: 15 }}>
            No description provided.
          </Text>
        )}

        <Text
          style={{
            fontSize: 18,
            color: todo.done ? "#4CAF50" : "#FF3B30",
            fontWeight: "bold",
          }}
        >
          {todo.done ? "Completed" : " Not Completed"}
        </Text>
      </View>
    </View>
  );
}
