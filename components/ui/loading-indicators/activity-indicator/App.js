import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#38BDF8"
      />

      <Text style={styles.loadingText}>
        Loading...
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
    gap: 12,
  },
  loadingText: {
    color: "#38BDF8",
    fontSize: 14,
    fontWeight: "600",
  },
});