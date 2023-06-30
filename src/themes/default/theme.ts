import {
  ControlsThemeSection,
  ElementsThemeSection,
  WindowThemeSection,
} from '../types';
import controls from './controls';
import elements from './elements';
import window from './window';

interface DefaultTheme {
  id: string;
  name: string;
  controls: ControlsThemeSection;
  elements: ElementsThemeSection;
  window: WindowThemeSection;
}

const defaultTheme: DefaultTheme = {
  id: 'DEFAULT',
  name: 'Default Theme',
  controls,
  elements,
  window,
};

export default defaultTheme;
