
import { View, Text, FlatList } from "react-native";

export default function Completed({ todos }) {
  const completed = todos.filter((t) => t.done);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 60,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "teal",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Completed Todos 
      </Text>

      <FlatList
        data={completed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#1f1f1f",
              borderRadius: 12,
              padding: 15,
              marginVertical: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 4,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                textDecorationLine: "line-through",
              }}
            >
              {item.title}
            </Text>

            {item.description ? (
              <Text
                style={{
                  color: "#aaa",
                  fontSize: 14,
                  marginTop: 4,
                  textDecorationLine: "line-through",
                }}
              >
                {item.description}
              </Text>
            ) : null}
          </View>
        )}
        ListEmptyComponent={
          <Text
            style={{
              color: "#888",
              textAlign: "center",
              marginTop: 60,
              fontSize: 16,
            }}
          >
            No completed todos yet 
          </Text>
        }
      />
    </View>
  );
}
