import { FlattenInterpolation } from 'styled-components';

import { AddressBarThemeProperties } from '../controls/AddressBar';
import { AlertButtonThemeProperties } from '../controls/AlertButton';
import { AlertTextThemeProperties } from '../controls/AlertText';
import { ButtonThemeProperties } from '../controls/Button';
import { CheckboxThemeProperties } from '../controls/Checkbox';
import { ComboBoxThemeProperties } from '../controls/ComboBox';
import { ControlWrapperThemeProperties } from '../controls/ControlWrapper';
import { DividerThemeProperties } from '../controls/Divider';
import { FieldsetThemeProperties } from '../controls/Fieldset';
import { LabelThemeProperties } from '../controls/Label';
import { ListBoxThemeProperties } from '../controls/ListBox';
import { MenuBarThemeProperties } from '../controls/MenuBar';
import { ProgressBarThemeProperties } from '../controls/ProgressBar';
import { ScrollableContentThemeProperties } from '../controls/ScrollableContent';
import { ScrollbarHorizontalThemeProperties } from '../controls/ScrollbarHorizontal';
import { ScrollbarVerticalThemeProperties } from '../controls/ScrollbarVertical';
import { StatusBarThemeProperties } from '../controls/StatusBar';
import { StatusBarSectionThemeProperties } from '../controls/StatusBarSection';
import { TextareaThemeProperties } from '../controls/Textarea';
import { TextInputThemeProperties } from '../controls/TextInput';
import { TimeInputThemeProperties } from '../controls/TimeInput';
import { ToolbarButtonThemeProperties } from '../controls/ToolbarButton';
import { WellThemeProperties } from '../controls/Well';

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
  'Icon',
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

export interface DefaultTheme {
  id: string;
  name: string;
  controls: ControlsThemeSection;
  elements: ElementsThemeSection;
  window: WindowThemeSection;
}

export interface Theme {
  id: string;
  name: string;
  controls?: Partial<ControlsThemeSection>;
  elements?: Partial<ElementsThemeSection>;
  window?: Partial<WindowThemeSection>;
}
