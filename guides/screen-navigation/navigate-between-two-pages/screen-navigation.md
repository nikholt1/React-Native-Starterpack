# React Native — Simple Page Navigation

## Installation

### 1. Install web support

Navigate to the root directory of your Expo project in the terminal and run:

```bash
npx expo install react-native-web react-dom
```

### 2. Add the example files

- Replace the existing `App.js` with the `App.js` from this folder.
- Copy `Home.js` and `Page2.js` from this folder into the root directory of your project.

Your project structure should look like this:

```text
your-project/
├── App.js
├── Home.js
├── Page2.js
└── package.json
```

### 3. Start the application

Run the following command from your project directory:

```bash
npx expo start
```

Follow the terminal instructions to open the app in your browser or on a device.

## How navigation works

The navigation system uses React's `useState` hook to keep track of the currently displayed page.

In `App.js`, the state is initialized to `"home"`:

```jsx
const [currentPage, setCurrentPage] = useState("home");
```

The navigation buttons update this state when pressed:

```jsx
<Pressable onPress={() => setCurrentPage("home")}>
  <Text>Home</Text>
</Pressable>

<Pressable onPress={() => setCurrentPage("page2")}>
  <Text>Page 2</Text>
</Pressable>
```

The app then displays the appropriate component based on the current state:

```jsx
{currentPage === "home" ? <Home /> : <Page2 />}
```

If `currentPage` is `"home"`, the `Home` component is displayed. Otherwise, the `Page2` component is displayed.

The screens are imported into `App.js` like regular components:

```jsx
import Home from "./Home";
import Page2 from "./Page2";
```

This example uses simple state-based navigation rather than a navigation library. It is intended as a starting point that you can extend and style to fit your own project.