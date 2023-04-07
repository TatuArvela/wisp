import { ControlsThemeSection } from '../../types';
import * as alertButton from './alertButton';
import * as alertText from './alertText';
import * as button from './button';
import * as checkbox from './checkbox';
import * as resizeHandle from './statusBar/resizeHandle';
import * as statusBar from './statusBar/statusBar';

const controls: ControlsThemeSection = {
  ...alertText,
  ...button,
  ...checkbox,
  ...resizeHandle,
  ...statusBar,
  ...alertButton,
};

export default controls;
