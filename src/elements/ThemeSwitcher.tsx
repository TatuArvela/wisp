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
      id="THEME_SWITCHER"
      title="Theme Switcher"
      isResizable={false}
      isClosable={false}
      isMaximizable={false}
      height={58}
      width={300}
    >
      <ListBox onChange={onChange} value={value} options={options} />
    </Window>
  );
};

export default ThemeSwitcher;
