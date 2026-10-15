
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

import Home from "./Home";
import Page2 from "./Page2";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/nikholt1/React-Native-Starterpack/refs/heads/main/react.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Pressable onPress={() => setCurrentPage("home")}>
          <Text
            style={[
              styles.navText,
              currentPage === "home" && styles.activeNav,
            ]}
          >
            Home
          </Text>
        </Pressable>

        <Pressable onPress={() => setCurrentPage("page2")}>
          <Text
            style={[
              styles.navText,
              currentPage === "page2" && styles.activeNav,
            ]}
          >
            Page 2
          </Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        {currentPage === "home" ? <Home /> : <Page2 />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080D16",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 16,
    backgroundColor: "#111827",
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },
  logo: {
    width: 52,
    height: 52,
  },
  navText: {
    color: "#9CA3AF",
    fontSize: 16,
  },
  activeNav: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
});
