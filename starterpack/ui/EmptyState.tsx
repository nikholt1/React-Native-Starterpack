import React from "react";
import { StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
  title: string;
  description?: string;
};

export const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#e5e7eb",
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 12,
    padding: 20
  },
  title: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700"
  },
  description: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center"
  }
});
