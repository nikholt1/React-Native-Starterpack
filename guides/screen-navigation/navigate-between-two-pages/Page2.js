
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 2</Text>

      <Text style={styles.description}>
        This is the second page.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080D16",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#F1F5F9",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    color: "#9CA3AF",
    fontSize: 15,
    textAlign: "center",
  },
});
