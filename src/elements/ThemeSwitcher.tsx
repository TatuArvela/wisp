import React from 'react';

import ListBox from '../controls/ListBox';
import { useThemeManager } from '../themeManager/hooks';
import Window from '../window/Window';

export const ThemeSwitcher = () => {
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
      alwaysShowCloseButton={true}
      id="THEME_SWITCHER"
      isClosable={false}
      isMaximizable={false}
      isResizable={false}
      title="Theme Switcher"
      width={300}
    >
      <ListBox onChange={onChange} value={value} options={options} />
    </Window>
  );
};

export default ThemeSwitcher;
