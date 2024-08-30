import { WindowType } from '../types';

export const determineIsBlocked = (
  windowId: string,
  windows: Map<string, WindowType>
) => {
  const currentWindow = windows.get(windowId);

  if (!currentWindow || !currentWindow.parentId) {
    return false;
  }

  const parentWindow = windows.get(currentWindow.parentId);

  return parentWindow ? parentWindow.isBlockingParent : false;
};

export const updateWindowsBlocked = () => {};

export const getRootParentId = (
  windowId: string,
  windows: Map<string, WindowType>
) => {
  let currentWindow = windows.get(windowId);

  while (currentWindow && currentWindow.parentId) {
    currentWindow = windows.get(currentWindow.parentId);
  }

  return currentWindow ? currentWindow.id : windowId;
};

export const getAllChildWindows = (
  windowId: string,
  windows: Map<string, WindowType>
) => {
  const allWindows = Array.from(windows.values());
  const result = [];

  const getNestedChildren = (parentId: string) => {
    const children = allWindows.filter(
      (window) => window.parentId === parentId
    );
    result.push(...children);
    children.forEach((child) => getNestedChildren(child.id));
  };

  getNestedChildren(windowId);
  return result;
};
