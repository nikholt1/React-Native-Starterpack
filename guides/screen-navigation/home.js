
import React from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  Platform,
  StyleSheet,
} from "react-native";

export default function Home() {
  function handlePress() {
    console.log("You pressed the button");

    if (Platform.OS === "web") {
      window.alert("You pressed the button");
    } else {
      Alert.alert("Button Pressed", "You pressed the button");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to React-native-starterpack
      </Text>

      <Text style={styles.description}>
        Press the button below to test your app.
      </Text>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
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
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: "#9CA3AF",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#374151",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
