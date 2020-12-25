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
    };
  }
}
