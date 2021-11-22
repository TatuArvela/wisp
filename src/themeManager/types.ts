import { Theme } from '../themes/types';

export type ThemeManager = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  themes: Theme[];
};
