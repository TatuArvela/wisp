import { Icon } from './index';

// TODO: get most suitable icon size
export const getIconFileForSize = (icon: Icon) => {
  return Object.entries(icon)[0][1];
};
