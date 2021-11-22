import { FlattenInterpolation } from 'styled-components';

const ControlsProperties = ['Button', 'ResizeHandle', 'StatusBar'];
const ElementsProperties = [
  'Desktop',
  'Taskbar',
  'TaskbarButton',
  'VersionInfo',
];
const WindowProperties = [
  'CloseButton',
  'EResize',
  'MaximizeButton',
  'MinimizeButton',
  'NEResize',
  'NResize',
  'NWResize',
  'SEResize',
  'SResize',
  'SWResize',
  'Title',
  'TitleBar',
  'TitleBarButtons',
  'UnmaximizeButton',
  'WResize',
  'WindowContent',
  'WindowElement',
];

type ThemeSection<Properties extends Array<string>> = {
  [key in Properties[number]]: FlattenInterpolation<any>;
};

export type ControlsThemeSection = ThemeSection<typeof ControlsProperties>;
export type ElementsThemeSection = ThemeSection<typeof ElementsProperties>;
export type WindowThemeSection = ThemeSection<typeof WindowProperties>;

export type Theme = {
  controls: ControlsThemeSection;
  elements: ElementsThemeSection;
  window: WindowThemeSection;
};
