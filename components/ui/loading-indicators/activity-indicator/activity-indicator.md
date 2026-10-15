# Loading Indicator

A simple loading indicator for React Native, using the built-in `ActivityIndicator` component.

## Preview

The loading indicator displays a spinning animation and a `Loading...` message centered on the screen.

### Web

![Loading indicator on web](./activity-web.png)

### Mobile

![Loading indicator on a phone](./activity-phone.png)

**The appearance depends on the platform.** React Native may render the indicator differently on the web, Android, and iOS. The screenshots above demonstrate the differences between the web and mobile versions.

## Features

- Animated loading spinner
- Centered layout
- Customizable color and size
- Optional loading message
- No additional dependencies required

## Installation

No additional packages are needed.

Replace your `App.js` with the example provided in this folder.

## Customization

### Change the spinner color

```jsx
<ActivityIndicator
  size="large"
  color="#38BDF8"
/>
```

Change `color` to any valid color value.

### Change the spinner size

```jsx
<ActivityIndicator size="small" />
```

Available sizes are `"small"` and `"large"`. Their exact appearance can vary by platform.

### Change the loading message

```jsx
<Text style={styles.loadingText}>
  Fetching data...
</Text>
```

Replace the text with whatever message fits your application.

## How it works

- `ActivityIndicator` displays the animated spinner.
- `View` centers the spinner and message using Flexbox.
- `flex: 1` allows the container to fill the available screen.
- `justifyContent: "center"` centers the content vertically.
- `alignItems: "center"` centers the content horizontally.

## Testing on different platforms

**Web:** Start the project with `npx expo start` and open it in your browser.

**Android:** Start an Android emulator or open the project on your Android phone through Expo Go.

**iOS:** Open the project in the iOS Simulator or on a physical iPhone.

Compare the results across platforms to see how the spinner is rendered on each device.

## Notes

This example displays a permanent loading indicator. In a real application, you would usually show it only while an operation is in progress, such as fetching data from an API or loading records from a database.