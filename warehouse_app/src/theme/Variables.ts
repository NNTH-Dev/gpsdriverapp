/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from 'types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  background: '#FFFFFF',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#000000',
  titleColor: '#FFFFFF',
  lightGray: '#EEEEEE',
  ghostWhite: '#F6F8FA',
  tealGreen: '#4A94A5',
  lightSilver: '#EAEAEA',
  borderGray: '#CCC8C8',
  green: '#74D951',
  lightSkyBlue: '#accbe3',
  lightBlue: '#EBF4FA',
  softAqua: '#8BBBDE',
  oceanBlue: '#307ab0',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#135281',
  blue: 'rgba(19, 82, 129, 0.97)',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 10,
  small: 12,
  semiRegular: 14,
  regular: 16,
  large: 20,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const semiRegular = tiny * 4; // 60
const semiLarge = tiny * 5; // 50
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  semiRegular,
  semiLarge,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
