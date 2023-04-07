import { ElementsThemeSection } from '../../types';
import * as desktop from './desktop';
import * as taskbar from './taskbar/taskbar';
import * as taskbarButton from './taskbar/taskbarButton';
import * as versionInfo from './versionInfo';

const elements: ElementsThemeSection = {
  ...taskbar,
  ...taskbarButton,
  ...desktop,
  ...versionInfo,
};

export default elements;
