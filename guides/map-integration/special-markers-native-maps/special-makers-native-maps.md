### Get started with `react-native-maps` here:
[React Native Maps Integration Guide](https://github.com/nikholt1/React-Native-Starterpack/blob/main/guides/map-integration/react-native-maps/react-native-maps.md)

Replace your `App.js` with the example below.

### Special Markers

Custom markers let you display more than the default map pin. You can create your own marker using React Native components or display an image loaded from a URL.

- **Custom shapes:** Use components such as `View` to create shapes, change colors, add borders, and rotate elements to create designs like diamonds.
- **Image markers:** Use `Image` with a URL to display logos, icons, or other images directly on the map.
- **Positioning:** Each marker uses latitude and longitude coordinates to determine its location. The `anchor` property controls which point of the marker aligns with those coordinates.
- **Customization:** Adjust dimensions, colors, borders, and other styles to fit your application.

Both approaches use the regular `Marker` component from `react-native-maps`; the content inside the component determines how the marker looks.