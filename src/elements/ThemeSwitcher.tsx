import React from 'react';

import ListBox from '../controls/ListBox';
import { useThemeManager } from '../themeManager/hooks';
import Window, { WindowProps } from '../window/Window';

export type ThemeSwitcherProps = Partial<WindowProps>;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme: currentTheme, themes, changeTheme } = useThemeManager();

  const value = `${currentTheme.name} (Active)`;

  const options = themes.map(
    (theme) => `${theme.name}${theme.id === currentTheme.id ? ' (Active)' : ''}`
  );

  const onChange = (value: string) => {
    const newTheme = themes.find((theme) => theme.name === value);
    newTheme && changeTheme(newTheme);
  };

  return (
    <Window
      {...props}
      alwaysShowCloseButton={props.alwaysShowCloseButton ?? true}
      height={props.height ?? 58}
      id={props.id ?? 'THEME_SWITCHER'}
      isClosable={props.isClosable ?? false}
      isMaximizable={props.isMaximizable ?? false}
      isResizable={props.isResizable ?? false}
      title={props.title ?? 'Theme Switcher'}
      width={props.width ?? 300}
    >
      <ListBox onChange={onChange} value={value} options={options} />
    </Window>
  );
};

export default ThemeSwitcher;
