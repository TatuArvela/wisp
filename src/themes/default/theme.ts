import { Theme } from '../types';
import controls from './controls';
import elements from './elements';
import window from './window/index';

const theme: Theme = {
  id: 'DEFAULT',
  name: 'Default Theme',
  controls,
  elements,
  window,
};

export default theme;
