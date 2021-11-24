import { FlattenInterpolation } from 'styled-components';

const ControlsProperties = [
  'AlertText',
  'Button',
  'ButtonWrapper',
  'ResizeHandle',
  'StatusBar',
] as const;
const ElementsProperties = [
  'Desktop',
  'Taskbar',
  'TaskbarButton',
  'VersionInfo',
] as const;
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
] as const;

type Style = FlattenInterpolation<any>;
type ThemeSection<Properties extends ReadonlyArray<string>> = {
  [key in Properties[number]]: Style;
};

export type ControlsThemeSection = ThemeSection<typeof ControlsProperties>;
export type ElementsThemeSection = ThemeSection<typeof ElementsProperties>;
export type WindowThemeSection = ThemeSection<typeof WindowProperties>;

export type DefaultTheme = {
  id: string;
  name: string;
  controls: ControlsThemeSection;
  elements: ElementsThemeSection;
  window: WindowThemeSection;
};

export type Theme = {
  id: string;
  name: string;
  controls?: Partial<ControlsThemeSection>;
  elements?: Partial<ElementsThemeSection>;
  window?: Partial<WindowThemeSection>;
};
