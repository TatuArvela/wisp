import { WindowThemeSection } from '../../types';
import * as resizeBorder from './components/resizeBorder';
import * as titleBar from './components/titleBar';
import * as titleBarButtons from './components/titleBarButtons';
import * as window from './window';
import * as windowElementContent from './windowElementContent';

const windowTheme: WindowThemeSection = {
  ...resizeBorder,
  ...titleBar,
  ...titleBarButtons,
  ...window,
  ...windowElementContent,
};

export default windowTheme;
