import { FlattenInterpolation } from 'styled-components';

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
import { ScrollableContentThemeProperties } from '../controls/ScrollableContent';
import { ScrollbarHorizontalThemeProperties } from '../controls/ScrollbarHorizontal';
import { ScrollbarVerticalThemeProperties } from '../controls/ScrollbarVertical';
import { StatusBarThemeProperties } from '../controls/StatusBar';
import { TextareaThemeProperties } from '../controls/Textarea';
import { TextInputThemeProperties } from '../controls/TextInput';
import { TimeInputThemeProperties } from '../controls/TimeInput';
import { WellThemeProperties } from '../controls/Well';

const ControlsProperties = [
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
  ...ScrollableContentThemeProperties,
  ...ScrollbarHorizontalThemeProperties,
  ...ScrollbarVerticalThemeProperties,
  ...StatusBarThemeProperties,
  ...TextareaThemeProperties,
  ...TextInputThemeProperties,
  ...TimeInputThemeProperties,
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
  'WindowButton',
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
