
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Card({
  children,
  title,
  subtitle,
  style,
}) {
  return (
    <View style={[styles.card, style]}>
      {(title || subtitle) && (
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}

          {subtitle && (
            <Text style={styles.subtitle}>{subtitle}</Text>
          )}
        </View>
      )}

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111C2E",
    borderWidth: 1,
    borderColor: "#26364D",
    borderRadius: 14,
    padding: 18,
    gap: 12,
  },
  header: {
    gap: 4,
  },
  title: {
    color: "#F1F5F9",
    fontSize: 17,
    fontWeight: "700",
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 13,
  },
});
