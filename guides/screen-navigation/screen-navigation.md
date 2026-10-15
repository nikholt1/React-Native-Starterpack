# React Native — Navigation Between Two Pages

A simple React Native example demonstrating how to navigate between two screens using **React Navigation Native Stack**.

## Overview

This recipe demonstrates how to:
- Create multiple screens in a React Native application.
- Navigate between `Home` and `Page2`.
- Configure a native stack navigator.
- Customize screen headers and background colors.
- Navigate between screens using buttons.
- Integrate the example into an existing React Native project.

## Preview

The app contains two screens:

| Screen | Description |
|---|---|
| Home | The starting screen with a button to open Page 2. |
| Page 2 | The second screen with a button to return to Home. |

The native stack also provides a header with a back button.

## Requirements

- Node.js and npm
- An existing Expo React Native project

## Installation

Install the required navigation dependencies from your project directory:

```bash
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

## Usage

You can use these files in an existing project or as the foundation for a new one.

1. **Replace your existing `App.js`:** Copy the provided `App.js` into the root of your project, replacing your current file. This sets up the navigation container and registers both screens.
2. **Add `Home.js` and `Page2.js`:** Copy these two files into the same directory as `App.js`. They contain the individual screen components.
3. **Check the imports:** Make sure `App.js` imports `Home` and `Page2` using the correct file paths. If you put them in a `screens/` folder, update the imports accordingly.
4. **Install the dependencies:** Run the installation commands above from your project directory.
5. **Start your development server:**

   ```bash
   npx expo start
   ```

6. Open the app on your emulator or device.
7. Press **Go to Page 2** to navigate to the second screen, or use the header back button to return to Home.

**Important:** Replacing `App.js` will overwrite your existing app entry point. Back up your current file first if you want to keep your existing implementation. You can also merge the navigation setup into your existing `App.js` instead.

## How It Works

### NavigationContainer

Wraps the application and manages navigation state.

### Stack.Navigator

Defines the stack of screens and sets `Home` as the initial screen.

### Stack.Screen

Registers each screen with a unique route name and a corresponding React component.

### navigation.navigate()

Navigates to a registered screen by its route name:

```jsx
navigation.navigate("Page2");
```

To navigate to Home:

```jsx
navigation.navigate("Home");
```

### Screen Options

The `screenOptions` property configures shared styling, including the header color, text color, and screen background.

## Project Structure

The example uses three separate files:

```text
your-project/
├── App.js
├── Home.js
└── Page2.js
```

Keeping the screens separate makes the code easier to maintain and allows you to add more pages as your application grows.

## Customization

- **Add a screen:** Create a new screen component and register it inside `Stack.Navigator`.
- **Change the starting screen:** Update `initialRouteName`.
- **Customize the header:** Modify the `screenOptions` property.
- **Pass data between screens:** Use route parameters with `navigation.navigate("Page2", { ... })`.
- **Organize your files:** Move screens into a dedicated folder and update the imports.

## Notes

- This example uses Expo-compatible navigation dependencies.
- The native stack provides platform-native navigation transitions and a header back button.
- Both screens are registered in the same navigator, so they can navigate to each other by route name.
- If your project already has a `NavigationContainer`, don't add another one around the same navigation tree.

## Related Resources

- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started/)
- [Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator/)

---

**Part of the React Native Starterpack** — reusable examples and practical guides for common React Native development tasks.