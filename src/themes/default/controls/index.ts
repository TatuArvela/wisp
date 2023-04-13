import { ControlsThemeSection } from '../../types';
import * as alertButton from './alertButton';
import * as alertText from './alertText';
import * as button from './button';
import * as checkbox from './checkbox';
import * as comboBox from './comboBox';
import * as divider from './divider';
import * as listBox from './listBox';
import * as resizeHandle from './statusBar/resizeHandle';
import * as statusBar from './statusBar/statusBar';
import * as textInput from './textInput';
import * as timeInput from './timeInput';
import * as well from './well';

const controls: ControlsThemeSection = {
  ...alertButton,
  ...alertText,
  ...button,
  ...checkbox,
  ...comboBox,
  ...divider,
  ...listBox,
  ...resizeHandle,
  ...statusBar,
  ...textInput,
  ...timeInput,
  ...well,
};

export default controls;
