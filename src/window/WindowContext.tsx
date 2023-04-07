import React, { useContext } from 'react';

import { WindowType } from '../windowManager/types';

export const WindowContext = React.createContext<WindowType>(undefined);

export const WindowProvider = WindowContext.Provider;

export const useWindow = () => {
  const window = useContext(WindowContext);
  return window;
};
