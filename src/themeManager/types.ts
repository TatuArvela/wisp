import { FullTheme } from '../themes/types';

export interface ThemeManager {
  theme: FullTheme;
  changeTheme: (theme: FullTheme) => void;
  themes: FullTheme[];
}
