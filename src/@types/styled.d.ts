// eslint-disable-next-line import/no-unresolved
import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      input: {
        color: string;
        placeholder: string;
      };

      text: {
        primary: string;
        secundary: string;
      };
    };

    font: {
      family: {
        bold: string;
        light: string;
        regular: string;
        black: string;
        blackItalic: string;
        boldItalic: string;
        extraBold: string;
        extraBoldItalic: string;
        extraLight: string;
        extraLightItalic: string;
        italic: string;
        lightItalic: string;
        medium: string;
        mediumItalic: string;
        semiBold: string;
        semiBoldItalic: string;
        thin: string;
        thinItalic: string;
      };
    };
  }
}
