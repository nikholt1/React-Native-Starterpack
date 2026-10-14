
import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function Button({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        styles[variant] || styles.primary,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "#08111F" : "#38BDF8"}
        />
      ) : (
        <Text
          style={[
            styles.text,
            styles[`${variant}Text`] || styles.primaryText,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 46,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  primary: {
    backgroundColor: "#38BDF8",
  },
  secondary: {
    backgroundColor: "#1E293B",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#38BDF8",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
  primaryText: {
    color: "#08111F",
  },
  secondaryText: {
    color: "#E2E8F0",
  },
  outlineText: {
    color: "#38BDF8",
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.45,
  },
});
