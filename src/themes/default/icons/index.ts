import { Icon } from '../../../icons';
import { IconsThemeSection } from '../../types';
import errorIcon from './error.png';
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

const icons: IconsThemeSection = {
  error,
  warning,
  wisp,
} as const;

export default icons;
