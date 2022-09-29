import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    background: {
      primary: string;
      secundary: string;
      tertiary: string;
    };

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      link: string;
    };
  }
}
