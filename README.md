# ![Wisp icon](stories/assets/icon.png?raw=true "Wisp icon") Wisp

[![Repository](https://img.shields.io/badge/repository-gray.svg?logo=github)](https://github.com/TatuArvela/wisp)
[![GitHub issues](https://img.shields.io/github/issues/TatuArvela/wisp)](https://github.com/TatuArvela/wisp/issues)
[![npm](https://img.shields.io/npm/v/@tatuarvela/wisp)](https://www.npmjs.com/package/@tatuarvela/wisp)
[![License](https://img.shields.io/github/license/TatuArvela/wisp)](https://github.com/TatuArvela/wisp/blob/master/LICENSE)
[![Created at Nitor](https://img.shields.io/badge/created%20at-Nitor-informational.svg)](https://nitor.com/)

Wisp is **a window manager and a widget toolkit** which allows building web
applications that look and feel like desktop applications.

Wisp comes with a set of ready controls and components you can use to build your
imitation desktop experience. You can also create your own theme and components
to tune the look and feel to your liking.

## Installation

### Dependencies

Wisp is made for use with **React**, and uses **styled-components** for theming.

```
npm install react react-dom styled-components
```

## Usage

Add a `Wisp` component to your React component, and give it some `Window`
components as children. The containing component needs to have a width and a
height.

```jsx
<div className="App">
  <Wisp>
    <Window id="hello world" title="Hello World">
      Check out Wisp
    </Window>
  </Wisp>
</div>
```
