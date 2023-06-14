import 'styled-components';
import theme from './theme';

//typeof copy characteristics from Theme
declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
