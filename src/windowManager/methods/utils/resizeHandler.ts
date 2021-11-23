// TODO
// useLayoutEffect(() => {
//   function updateAllWindowSizes() {
//     console.log('Updated!');
//     const updatedWindows = new Map(state.windows);
//     const desktopWidth = getViewportWidth();
//     const desktopHeight = getViewportHeight();
//     updatedWindows.forEach((window) => {
//       fitWindow(window, config, desktopWidth, desktopHeight);
//       repositionWindow(window, 0, 0, desktopWidth, desktopHeight);
//     });
//     setWindows(updatedWindows);
//   }
//
//   window.addEventListener('resize', updateAllWindowSizes);
//   updateAllWindowSizes();
//   return () => window.removeEventListener('resize', updateAllWindowSizes);
//   // This only needs to fire once after all DOM mutations
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
