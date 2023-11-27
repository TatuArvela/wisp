import { FlattenInterpolation } from 'styled-components';

import {
  AddressBarThemeProperties,
  AlertButtonThemeProperties,
  AlertTextThemeProperties,
  ButtonThemeProperties,
  CheckboxThemeProperties,
  ComboBoxThemeProperties,
  ControlWrapperThemeProperties,
  DividerThemeProperties,
  FieldsetThemeProperties,
  LabelThemeProperties,
  ListBoxThemeProperties,
  MenuBarThemeProperties,
  ProgressBarThemeProperties,
  ScrollableContentThemeProperties,
  ScrollbarHorizontalThemeProperties,
  ScrollbarVerticalThemeProperties,
  StatusBarSectionThemeProperties,
  StatusBarThemeProperties,
  TextareaThemeProperties,
  TextInputThemeProperties,
  TimeInputThemeProperties,
  ToolbarButtonThemeProperties,
  WellThemeProperties,
  WindowContentThemeProperties,
} from '../controls';
import { Icon, IconKey } from '../icons';

const ControlsProperties = [
  ...AddressBarThemeProperties,
  ...AlertButtonThemeProperties,
  ...AlertTextThemeProperties,
  ...ButtonThemeProperties,
  ...CheckboxThemeProperties,
  ...ComboBoxThemeProperties,
  ...ControlWrapperThemeProperties,
  ...DividerThemeProperties,
  ...FieldsetThemeProperties,
  ...LabelThemeProperties,
  ...ListBoxThemeProperties,
  ...MenuBarThemeProperties,
  ...ProgressBarThemeProperties,
  ...ScrollableContentThemeProperties,
  ...ScrollbarHorizontalThemeProperties,
  ...ScrollbarVerticalThemeProperties,
  ...StatusBarThemeProperties,
  ...StatusBarSectionThemeProperties,
  ...TextareaThemeProperties,
  ...TextInputThemeProperties,
  ...TimeInputThemeProperties,
  ...ToolbarButtonThemeProperties,
  ...WellThemeProperties,
  ...WindowContentThemeProperties,
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
  'TitleBar',
  'TitleBarButtons',
  'TitleBarIcon',
  'TitleBarTitle',
  'TitleBarTitleContainer',
  'UnmaximizeButton',
  'WindowButton',
  'WindowContent',
  'WindowElement',
  'WResize',
] as const;

type Style = FlattenInterpolation<any>;
type ThemeSection<Properties extends ReadonlyArray<string>> = {
  [key in Properties[number]]: Style;
};

export type ControlsThemeSection = ThemeSection<typeof ControlsProperties>;
export type ElementsThemeSection = ThemeSection<typeof ElementsProperties>;
export type WindowThemeSection = ThemeSection<typeof WindowProperties>;
export type IconsThemeSection = Record<IconKey, Icon> & Record<string, Icon>;

export interface FullTheme {
  id: string;
  name: string;
  controls: ControlsThemeSection;
  elements: ElementsThemeSection;
  window: WindowThemeSection;
  icons: IconsThemeSection;
}

export interface Theme {
  id: string;
  name: string;
  controls?: Partial<ControlsThemeSection>;
  elements?: Partial<ElementsThemeSection>;
  window?: Partial<WindowThemeSection>;
  icons?: Partial<IconsThemeSection>;
}
