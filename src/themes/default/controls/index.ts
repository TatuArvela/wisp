import { ControlsThemeSection } from '../../types';
import * as alertButton from './alertButton';
import * as alertText from './alertText';
import * as button from './button';
import * as checkbox from './checkbox';
import * as comboBox from './comboBox';
import * as controlWrapper from './controlWrapper';
import * as divider from './divider';
import * as fieldset from './fieldset';
import * as label from './label';
import * as listBox from './listBox';
import * as scrollableContent from './scrollableContent';
import * as scrollbarHorizontal from './scrollbarHorizontal';
import * as scrollbarVertical from './scrollbarVertical';
import * as statusBar from './statusBar';
import * as textarea from './textarea';
import * as textInput from './textInput';
import * as timeInput from './timeInput';
import * as well from './well';

const controls: ControlsThemeSection = {
  ...alertButton,
  ...alertText,
  ...button,
  ...checkbox,
  ...comboBox,
  ...controlWrapper,
  ...divider,
  ...fieldset,
  ...label,
  ...listBox,
  ...scrollableContent,
  ...scrollbarHorizontal,
  ...scrollbarVertical,
  ...statusBar,
  ...textarea,
  ...textInput,
  ...timeInput,
  ...well,
};

export default controls;
