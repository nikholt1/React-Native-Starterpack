# React Native — Simple Map Integration

## Installation

### 1. Install the map package

Navigate to the root directory of your Expo project in the terminal and run:

```bash
npx expo install react-native-maps
```

### 2. Add the example

Replace the contents of `Home.js` with the `Home.js` file from this folder.

### 3. Run the application

Start Expo:

```bash
npx expo start
```

Open the app on your phone, or use an Android emulator or iOS simulator on your computer.

**Important:** This example uses the phone's native map integration. Android uses Google Maps by default, while iOS uses Apple Maps by default. If you want to test this map on your computer, you need a compatible emulator or simulator. It does not work directly in the browser using `react-native-maps`.

## How the code works

### Import the components

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
```

- `View` provides the container for the map.
- `StyleSheet` defines the layout.
- `MapView` displays the native map.

### Display the map

```jsx
export default function Home() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
```

The `Home` component renders a container with a map inside it. No markers, location tracking, or additional controls are added.

### Make the map fill the screen

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
```

The `flex: 1` setting makes both the container and the map expand to fill the available space.

This is a minimal starting point. You can extend it later with markers, user location, map regions, and other features.