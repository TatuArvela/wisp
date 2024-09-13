import { WindowType } from '../types';

export const getChildWindows = (
  windowId: string,
  windows: Map<string, WindowType>
) => {
  const allWindows = Array.from(windows.values());
  return allWindows.filter((window) => window.parentId === windowId);
};

export const getActivatableWindow = (
  windowId: string,
  windows: Map<string, WindowType>,
  windowOrder: string[]
) => {
  const originalWindow = windows.get(windowId);

  if (!originalWindow) return undefined;
  if (originalWindow.isModal) return originalWindow;

  const childWindows = getChildWindows(windowId, windows);
  if (childWindows.length === 0) return originalWindow;

  const modalChildId = [...windowOrder]
    .reverse()
    .find((windowId) =>
      childWindows.find((childWindow) => childWindow.id === windowId)
    );
  const modalChild = childWindows.find((window) => window.id === modalChildId);
  return modalChild ? modalChild : originalWindow;
  // TODO: Block non-modal children?
  // TODO: Is support for deeper nesting needed?
};

export const isWindowActivatable = (
  windowId: string,
  windows: Map<string, WindowType>,
  windowOrder: string[]
) => getActivatableWindow(windowId, windows, windowOrder)?.id === windowId;
