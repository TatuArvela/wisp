import type { FullTheme } from '../types';
import controls from './controls';
import elements from './elements';
import icons from './icons';
import window from './window';

const defaultTheme: FullTheme = {
  id: 'DEFAULT',
  name: 'Default Theme',
  controls,
  elements,
  window,
  icons,
};

export default defaultTheme;
