
import React from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Spinner({
  size = "large",
  color = "#38BDF8",
  label,
  style,
}) {
  return (
    <View
      accessibilityRole="progressbar"
      style={[styles.container, style]}
    >
      <ActivityIndicator size={size} color={color} />

      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 12,
  },
  label: {
    color: "#94A3B8",
    fontSize: 13,
  },
});
