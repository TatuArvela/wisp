import { WindowThemeSection } from '../../types';
import * as resizeBorder from './components/resizeBorder';
import * as titleBar from './components/titleBar';
import * as titleBarButtons from './components/titleBarButtons';
import * as window from './window';
import * as windowContent from './windowContent';

const windowTheme: WindowThemeSection = {
  ...resizeBorder,
  ...titleBar,
  ...titleBarButtons,
  ...window,
  ...windowContent,
};

export default windowTheme;
