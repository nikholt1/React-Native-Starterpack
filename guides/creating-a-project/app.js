import React from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert(
      "Button Pressed",
      "You pressed the button!"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My First React Native App
      </Text>

      <Text style={styles.description}>
        Press the button below to test your app.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>
          Press Me
        </Text>
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: "#94A3B8",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#38BDF8",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: "#080D16",
    fontSize: 16,
    fontWeight: "bold",
  },
});