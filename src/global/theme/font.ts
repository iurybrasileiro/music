import { fontSizePercentage } from '~/utils';

export default {
  size: (size: number): number => fontSizePercentage(size),
  family: {
    bold: 'Montserrat-Bold',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
    black: 'Montserrat-Black',
    blackItalic: 'Montserrat-BlackItalic',
    boldItalic: 'Montserrat-BoldItalic',
    extraBold: 'Montserrat-ExtraBold',
    extraBoldItalic: 'Montserrat-ExtraBoldItalic',
    extraLight: 'Montserrat-ExtraLight',
    extraLightItalic: 'Montserrat-ExtraLightItalic',
    italic: 'Montserrat-Italic',
    lightItalic: 'Montserrat-LightItalic',
    medium: 'Montserrat-Medium',
    mediumItalic: 'Montserrat-MediumItalic',
    semiBold: 'Montserrat-SemiBold',
    semiBoldItalic: 'Montserrat-SemiBoldItalic',
    thin: 'Montserrat-Thin',
    thinItalic: 'Montserrat-ThinItalic',
  },
};
