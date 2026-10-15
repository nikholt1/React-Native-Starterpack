# React Native — Simple Map Integration

## Installation

### 1. Install the map package

Navigate to the root directory of your Expo project in the terminal and run:

```bash
npx expo install react-native-maps
```

### 2. Add the example

Replace the contents of `App.js` with the `App.js` file from this folder.

### 3. Start the application

Run the following command:

```bash
npx expo start
```

**Do not press any additional keys in the terminal.** Expo will display a QR code that you can scan with your phone to open the app.

- **Physical phone:** Install Expo Go, then scan the QR code using your phone's camera or Expo Go, as appropriate for your device. Make sure your phone and computer can communicate over the network.
- **Android emulator:** Start an Android Virtual Device (AVD) using Android Studio before opening the app. With the emulator running, press `a` in the Expo terminal to launch the app.
- **iOS simulator:** On macOS, open the iOS Simulator and press `i` in the Expo terminal. The iOS Simulator is not available natively on Windows.

**Important:** This example uses the native map integration. Android uses Google Maps by default, while iOS uses Apple Maps by default. If you want to test this map on your computer, you need a compatible Android emulator or iOS simulator. It does not work directly in the browser using `react-native-maps`.

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
export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
```

The `App` component renders a container with a map inside it. No markers, location tracking, or additional controls are added.

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