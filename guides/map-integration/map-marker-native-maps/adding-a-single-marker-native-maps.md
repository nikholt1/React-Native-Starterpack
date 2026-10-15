### Get started with `react-native-maps` here:
[React Native Maps Integration Guide](https://github.com/nikholt1/React-Native-Starterpack/tree/main/guides/map-integration/react-native-maps)

Replace your `App.js` with the example below.

### Markers

Markers are pins displayed on the map to identify specific locations. Each marker has a coordinate containing a latitude and longitude, which determines its position.

You can also add a **title** and **description** that appear when the user taps the marker. In this example, the marker points to Copenhagen City Hall Square.

To add more markers, simply add additional `<Marker />` components inside `<MapView />`, each with its own coordinates, title, and description.