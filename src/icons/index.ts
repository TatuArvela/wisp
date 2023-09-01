import errorIcon from './error.png';
import { Icon } from './types';
import warningIcon from './warning.png';
import wispIcon from './wisp.png';

const wisp: Icon = {
  48: wispIcon,
};

const error: Icon = {
  48: errorIcon,
};

const warning: Icon = {
  48: warningIcon,
};

const icons = {
  error,
  warning,
  wisp,
} as const;

export type IconKey = keyof typeof icons;

export default icons;
