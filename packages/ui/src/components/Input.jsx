
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

export default function Input({
  label,
  error,
  containerStyle,
  inputStyle,
  onFocus,
  onBlur,
  ...textInputProps
}) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        {...textInputProps}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        placeholderTextColor="#64748B"
        style={[
          styles.input,
          focused && styles.focused,
          error && styles.invalid,
          inputStyle,
        ]}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },
  label: {
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: "600",
  },
  input: {
    minHeight: 46,
    paddingHorizontal: 13,
    paddingVertical: 11,
    backgroundColor: "#0B1423",
    borderWidth: 1,
    borderColor: "#26364D",
    borderRadius: 9,
    color: "#F1F5F9",
    fontSize: 15,
  },
  focused: {
    borderColor: "#38BDF8",
  },
  invalid: {
    borderColor: "#F87171",
  },
  error: {
    color: "#F87171",
    fontSize: 12,
  },
});
