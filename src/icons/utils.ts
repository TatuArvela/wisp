import { Icon } from './types';

// TODO: get most suitable icon size
export const getIconFileForSize = (icon: Icon) => {
  const iconFile = Object.entries(icon)[0][1];
  return iconFile;
};
