import { ControlsThemeSection } from '../../types';
import * as addressBar from './addressBar';
import * as button from './button';
import * as checkbox from './checkbox';
import * as comboBox from './comboBox';
import * as controlWrapper from './controlWrapper';
import * as divider from './divider';
import * as fieldset from './fieldset';
import * as label from './label';
import * as listBox from './listBox';
import * as menuBar from './menuBar';
import * as messageBoxButton from './messageBoxButton';
import * as messageBoxContent from './messageBoxContent';
import * as messageBoxIcon from './messageBoxIcon';
import * as messageBoxText from './messageBoxText';
import * as progressBar from './progressBar';
import * as scrollableContent from './scrollableContent';
import * as scrollbarHorizontal from './scrollbarHorizontal';
import * as scrollbarVertical from './scrollbarVertical';
import * as statusBar from './statusBar';
import * as statusBarSection from './statusBarSection';
import * as textarea from './textarea';
import * as textInput from './textInput';
import * as timeInput from './timeInput';
import * as toolbar from './toolbar';
import * as toolbarButton from './toolbarButton';
import * as well from './well';
import * as windowContent from './windowContent';

const controls: ControlsThemeSection = {
  ...addressBar,
  ...button,
  ...checkbox,
  ...comboBox,
  ...controlWrapper,
  ...divider,
  ...fieldset,
  ...label,
  ...listBox,
  ...menuBar,
  ...messageBoxButton,
  ...messageBoxContent,
  ...messageBoxIcon,
  ...messageBoxText,
  ...progressBar,
  ...scrollableContent,
  ...scrollbarHorizontal,
  ...scrollbarVertical,
  ...statusBar,
  ...statusBarSection,
  ...textInput,
  ...textarea,
  ...timeInput,
  ...toolbar,
  ...toolbarButton,
  ...well,
  ...windowContent,
};

export default controls;
