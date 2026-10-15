# React-Native-Starterpack

<p align="center">
  <img
    width="250"
    height="250"
    alt="React Native Starterpack"
    src="https://github.com/user-attachments/assets/f8d8f981-1eb8-4065-97de-16a7667986c5"
  />
</p>

<h1 align="center">React-Native-Starterpack</h1>

This is an open, community-driven collection of reusable React Native components, code examples, practical guides, and complete application recipes.

The goal is to create a shared resource where developers can find ready-to-use implementations, learn from each other, and contribute solutions that make React Native development more accessible.

Anyone is welcome to contribute new examples, improve existing content, or introduce new categories whenever something is missing.

## Get Started

New to React Native? Start by creating your project using the guide below.

[**Creating a Project →**](https://github.com/nikholt1/React-Native-Starterpack/blob/main/guides/creating-a-project/creating-a-project-guide.md)

## Repository Structure

The repository is divided into three main sections: **Components**, **Guides**, and **Recipes**.

```text
React-Native-Starterpack/
│
├── components/
│   ├── ui/
│   ├── navigation/
│   └── ...
│
├── guides/
│   ├── creating-a-project/
│   ├── map-integration/
│   ├── screen-navigation/
│   └── ...
│
└── recipes/
    ├── ...
    └── ...
```

These folders serve different purposes. Choose the section that best fits what you want to contribute.

## Components

**[Browse Components →](https://github.com/nikholt1/React-Native-Starterpack/tree/main/components)**

The `components/` folder contains reusable, individual UI components and other building blocks that can be copied into existing React Native projects.

Examples include:

- Buttons, cards, inputs, and dropdowns
- Loading indicators and progress bars
- Navigation bars and menus
- Modals, alerts, and notifications
- Reusable layouts and visual elements

Components should ideally include their own folder containing:

- `README.md` — a description, preview, usage instructions, and customization options.
- Source code — the component implementation.
- Preview images, where relevant.

For example, if you create a new button, you can add it under `components/ui/buttons/`. Give it its own folder with a README and the code required to use it.

If an appropriate category does not exist, feel free to create a new one. For example, you could introduce `components/charts/` if you want to contribute reusable chart components.

The existing structure is a starting point, not a limitation.

## Guides

**[Browse Guides →](https://github.com/nikholt1/React-Native-Starterpack/tree/main/guides)**

The `guides/` folder contains instructions and focused code examples that explain how to set up, integrate, or implement specific functionality.

Examples include:

- Creating a new React Native project
- Integrating maps
- Implementing screen navigation
- Connecting Firebase services
- Working with APIs and device features

Each guide should have its own folder when appropriate, containing a `README.md` or guide document alongside any relevant example code and assets.

For example, a new guide about custom map markers could be added under `guides/map-integration/custom-markers/`.

If a suitable category does not exist, feel free to create a new base folder. For example, a guide about camera integration could introduce `guides/camera-integration/`.

Guides should explain the steps clearly so that other developers can follow along and reproduce the result.

## Recipes

**[Browse Recipes →](https://github.com/nikholt1/React-Native-Starterpack/tree/main/recipes)**

The `recipes/` folder is for **complete, functional applications or features that work together as a whole**, rather than isolated components or individual integration examples.

A recipe should guide the reader through building a working result by following the instructions and using the provided code.

Examples include:

- A map application with markers and location tracking
- A Firebase-powered image gallery
- A login and registration application
- A task manager with persistent storage
- A real-time chat application
- An application combining maps, Firebase, and image uploads

Each recipe should have its own folder containing a `README.md`, the necessary source code, and any additional files required to build the application.

Explain the prerequisites, setup, configuration, and steps needed to get the application running. Clearly document any required API keys, environment variables, or external services.

If a recipe introduces a type of application that does not fit an existing category, feel free to create a new base folder under `recipes/`.

**The goal is that someone can follow the recipe from beginning to end and end up with a working application.**

## Contributing

Contributions of all sizes are welcome, whether you are adding a small UI component, writing a guide, or sharing a complete application.

Please **do not include full `node_modules` folders or bundled npm packages** in your contributions. Instead, document any required dependencies and installation commands in the relevant `README.md`, so users can install only what they need to run the component, follow the guide, or build the application. Keep contributions focused on the source code, configuration files, and instructions necessary to
When contributing:

1. Choose the section that best matches your contribution.
2. Place it in an existing category if one fits.
3. Create a new category if the current structure does not cover your contribution.
4. Include clear instructions and the code needed to use or reproduce your example.
5. Add screenshots or previews where they help explain the result.
6. Keep examples focused, understandable, and easy to reuse.

You do not need permission to introduce a useful new category. The folder structure is intended to grow with the community.

## Build It Together

This project is intended to be a shared cookbook of practical React Native knowledge. If you have built something useful, solved a problem, or found a better way to implement a feature, consider contributing it.

The more examples the community shares, the more useful the starter pack becomes for everyone.