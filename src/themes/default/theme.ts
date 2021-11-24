import { DefaultTheme } from '../types';
import controls from './controls';
import elements from './elements';
import window from './window/index';

const theme: DefaultTheme = {
  id: 'DEFAULT',
  name: 'Default Theme',
  controls,
  elements,
  window,
};

export default theme;
