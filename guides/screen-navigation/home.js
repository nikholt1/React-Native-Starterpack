
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Text style={styles.description}>
        Welcome to the home page.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Page2")}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Go to Page 2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E2E8F0",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#38BDF8",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "#08111F",
    fontSize: 16,
    fontWeight: "600",
  },
});
