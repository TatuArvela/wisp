import { Theme } from '../themes/types';

export interface ThemeManager {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  themes: Theme[];
}
