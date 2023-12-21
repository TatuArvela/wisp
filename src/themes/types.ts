import { FlattenInterpolation } from 'styled-components';

import {
  AddressBarThemeProperties,
  AlertButtonThemeProperties,
  AlertContentThemeProperties,
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
import {
  DesktopThemeProperties,
  TaskbarButtonThemeProperties,
  TaskbarThemeProperties,
  VersionInfoThemeProperties,
} from '../elements';
import { Icon, IconKey } from '../icons';
import {
  ResizeBorderThemeProperties,
  TitleBarButtonsThemeProperties,
  TitleBarThemeProperties,
  WindowElementContentThemeProperties,
  WindowElementThemeProperties,
} from '../window';

const ControlsProperties = [
  ...AddressBarThemeProperties,
  ...AlertButtonThemeProperties,
  ...AlertContentThemeProperties,
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
  ...StatusBarSectionThemeProperties,
  ...StatusBarThemeProperties,
  ...TextareaThemeProperties,
  ...TextInputThemeProperties,
  ...TimeInputThemeProperties,
  ...ToolbarButtonThemeProperties,
  ...WellThemeProperties,
  ...WindowContentThemeProperties,
] as const;

const ElementsProperties = [
  ...DesktopThemeProperties,
  ...TaskbarButtonThemeProperties,
  ...TaskbarThemeProperties,
  ...VersionInfoThemeProperties,
] as const;

const WindowProperties = [
  ...ResizeBorderThemeProperties,
  ...TitleBarThemeProperties,
  ...TitleBarButtonsThemeProperties,
  ...WindowElementContentThemeProperties,
  ...WindowElementThemeProperties,
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
