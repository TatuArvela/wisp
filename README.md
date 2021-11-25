# ![icon](stories/assets/icon.png?raw=true "icon") Wisp

Wisp is **a window manager and a widget toolkit** which allows building web
applications that look and feel like desktop applications.

Wisp comes with a set of ready controls and components you can use to build your
imitation desktop experience. You can also create your own theme and components
to tune the look and feel to your liking.

## Installation

### Dependencies

Wisp is made for use with **React**, and uses **styled-components** for theming.

```
yarn add react react-dom styled-components
```

## Usage

*TODO*

Add a `Wisp` component to your React component, and give it some `Window`
components as children. The containing component needs to have a width and a
height.

`initialState` prop can be used to provide a title, size and position, as well
as other properties.

```jsx
<div className="App">
  <Wisp>
    <Window id="hello world" initialState={{ title: 'Hello World' }}>
      Check out Wisp
    </Window>
  </Wisp>
</div>
```
