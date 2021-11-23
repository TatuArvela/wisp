import React from 'react';

import { useThemeManager } from '../themeManager/hooks';
import Window from '../window/Window';

const ThemeSwitcher: React.FC = () => {
  const { theme: currentTheme, themes, changeTheme } = useThemeManager();
  const onChange = (e) => {
    const newTheme = themes.find((theme) => theme.id === e.target.value);
    newTheme && changeTheme(newTheme);
  };

  return (
    <Window initialState={{ title: 'Theme Switcher' }} id="THEME_SWITCHER">
      <select onChange={onChange} value={currentTheme.id}>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
            {theme.id === currentTheme.id && ' (Active)'}
          </option>
        ))}
      </select>
    </Window>
  );
};

export default ThemeSwitcher;
