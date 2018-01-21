# Installation

_Warning: This project is still under development and not recommended for general use._

React Fluent is a set of React 16 components that implement Microsoft's Fluent Design Specification, and inspired by React Toolbox and its design. It's powered by CSS Modules allowing for full customization of each component and is compatible with standard module bundlers. If you're using Typescript, React Fluent is written in Typescript, so you'll be able to take full advantage of type information.

The easiest way to install is via npm:

```shell
npm install --save react-fluent
```

## Basic Usage

To begin using React Fluent components, surround the root of your Application with the `RFThemeProvider`:

```javascript
<RFThemeProvider accentColor="blue">
  <App />
</RFThemeProvider>
```

React Fluent is based off of Fluent Design. An accent color is chosen, then a light or dark theme is derived from the accent. You may override which theme to use on a per component basis by surrounding a sub component with another `RFThemeProvider`:

```javascript
<RFThemeProvider accentColor="blue">
  <RFThemeProvider stylus="dark">
    <AppBar />
  </RFThemeProvider>
  <App />
</RFThemeProvider>
```
