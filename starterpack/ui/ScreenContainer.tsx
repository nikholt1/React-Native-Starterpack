import React, { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

type ScreenContainerProps = PropsWithChildren<{
  scroll?: boolean;
}>;

export const ScreenContainer = ({ children, scroll = false }: ScreenContainerProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {scroll ? (
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.flex}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.content}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  flex: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 16
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16
  }
});
