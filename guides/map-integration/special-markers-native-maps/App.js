import React from "react";
import { StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const copenhagen = {
    latitude: 55.6761,
    longitude: 12.5683,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...copenhagen,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Custom diamond marker */}
        <Marker
          coordinate={{
            latitude: 55.6761,
            longitude: 12.5683,
          }}
          title="Diamond Marker"
          description="A custom marker made with React Native views"
          anchor={{ x: 0.5, y: 0.5 }}
        >
          <View style={styles.diamond} />
        </Marker>

        {/* Image marker from a URL */}
        <Marker
          coordinate={{
            latitude: 55.679,
            longitude: 12.572,
          }}
          title="Image Marker"
          description="A marker displaying an image from a URL"
          anchor={{ x: 0.5, y: 0.5 }}
        >
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/nikholt1/React-Native-Starterpack/refs/heads/main/react.png",
            }}
            style={styles.imageMarker}
            resizeMode="contain"
          />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  diamond: {
    width: 24,
    height: 24,
    backgroundColor: "#00D9FF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 3,
    transform: [{ rotate: "45deg" }],
  },
  imageMarker: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#00D9FF",
    backgroundColor: "#FFFFFF",
  },
});