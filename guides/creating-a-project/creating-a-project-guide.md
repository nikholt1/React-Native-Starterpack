# Creating a React Native Project with Expo

This guide explains how to create, configure, and run a React Native application using Expo.

Expo simplifies React Native development by providing project tooling, development servers, device testing, and support for multiple platforms.

## 1. Prerequisites

Before starting, install the following:

- **Node.js (LTS)** — https://nodejs.org/
- **A code editor** — for example, Visual Studio Code.
- **Expo Go** on your phone, if you want to test on a physical device.

You can verify your Node.js and npm installations with:

```bash
node -v
npm -v
```

## 2. Create a New Expo Project

Open a terminal in the directory where you want your project to live.

Run:

```bash
npx create-expo-app@latest MyReactNativeApp
```

Replace `MyReactNativeApp` with your preferred project name.

Navigate into the new project:

```bash
cd MyReactNativeApp
```

This creates the initial application structure and installs the required dependencies.

## 3. Start the Development Server

Run the following command inside your project directory:

```bash
npx expo start
```

Expo starts a development server and displays a QR code in your terminal or development tools.

Keep this terminal running while you develop your application.

## 4. Run the Application

You can run the same React Native project on different platforms.

### Android — Physical Device

1. Install Expo Go from Google Play.
2. Connect your phone and development computer to the same network, when possible.
3. Start the Expo development server.
4. Scan the QR code using Expo Go.

Your application should open on your phone.

### Android — Emulator

1. Install Android Studio.
2. Install the Android SDK and create an Android Virtual Device (AVD).
3. Start the emulator.
4. Run the development server:

```bash
npx expo start
```

Press `a` in the terminal to open the application on the Android emulator.

### iOS — Physical Device

1. Install Expo Go from the Apple App Store.
2. Start the development server.
3. Scan the QR code using your iPhone's camera or Expo Go, as appropriate.

**Note:** You can test on a physical iPhone without owning a Mac, provided your network and Expo Go setup work. Building a native iOS application locally generally requires macOS and Xcode.

### iOS — Simulator

A local iOS Simulator requires macOS and Xcode.

1. Install Xcode.
2. Install the required iOS Simulator.
3. Start the Expo development server.
4. Press `i` in the terminal to open the iOS Simulator.

### Web Browser

To run the project in a browser, install the web dependencies:

```bash
npx expo install react-native-web react-dom
```

Then start Expo:

```bash
npx expo start --web
```

Alternatively, run `npx expo start` and press `w` in the terminal.

Some React Native components and native device features behave differently on the web, so check platform compatibility when using native integrations.

## 5. Understanding the Project Structure

A new Expo project typically contains files and folders similar to these. The exact structure depends on the template you select.

```text
MyReactNativeApp/
├── app/                 # Screens and routes in the default
│                        # Expo Router template
├── assets/              # Images, fonts, and other assets
├── components/          # Reusable UI components
├── package.json         # Dependencies and npm scripts
├── app.json             # Expo configuration
└── node_modules/        # Installed dependencies
```

If you choose a different template, your entry point and folder structure may differ.

### Important files

- `app/` — contains screens and routes when using Expo Router.
- `components/` — a common place to keep reusable UI components.
- `assets/` — images, icons, and fonts.
- `package.json` — lists dependencies and available scripts.
- `app.json` — contains application configuration.

## 6. Create Your First Screen

If your project uses the default Expo Router template, open `app/index.tsx` or the corresponding initial route file and add a simple screen:

```jsx
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#080D16",
  },
  title: {
    color: "#38BDF8",
    fontSize: 24,
    fontWeight: "bold",
  },
});
```

The default template may use `.tsx` files. If you're using JavaScript, you can use `.js` or `.jsx` instead, provided the file is in the correct location for your chosen template.

Save the file. Expo's development server will usually reload the application automatically.

## 7. Install Additional Dependencies

When adding a library, use the appropriate installation method.

For libraries supported by Expo's compatibility tooling:

```bash
npx expo install package-name
```

For ordinary JavaScript packages that don't require Expo-specific version selection:

```bash
npm install package-name
```

For example, to add web support:

```bash
npx expo install react-native-web react-dom
```

Always check a library's documentation for platform support and any additional setup requirements.

## 8. Useful Development Commands

| Command | Purpose |
|---|---|
| `npx expo start` | Start the development server |
| `npx expo start --web` | Start the web version |
| `npx expo start --clear` | Clear the Metro bundler cache and start again |
| `npx expo install package-name` | Install a compatible dependency |
| `npm install` | Install dependencies listed in `package.json` |
| `npx expo-doctor` | Check the project for common configuration issues |

## 9. Common Problems

### The QR code does not connect

- Check that your phone and computer can communicate over the network.
- Temporarily try a different network if necessary.
- Try starting Expo with tunnel mode:

```bash
npx expo start --tunnel
```

Tunnel mode can be slower and may require additional setup.

### A dependency causes errors

Try checking the project's dependency compatibility:

```bash
npx expo-doctor
```

For a supported Expo package, reinstall it with `npx expo install package-name` to select a compatible version.

### The application shows an old version

Restart Expo and clear the bundler cache:

```bash
npx expo start --clear
```

## 10. Ready to Build

Once the project is running, you can start adding:

- Reusable UI components
- Navigation and screens
- Firebase authentication and databases
- Maps and device location
- API integrations
- Animations and loading indicators

Explore the other guides, recipes, and reusable components in React-Native-Starterpack to speed up development and share your own solutions with the community.

## 11. Try the application

Replace the app.js file in your folder with the "app.js" file in this folder
