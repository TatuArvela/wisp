import { FullTheme, Theme } from '../themes/types';

export interface ThemeManager {
  theme: FullTheme;
  changeTheme: (theme: Theme) => void;
  themes: Theme[];
}
