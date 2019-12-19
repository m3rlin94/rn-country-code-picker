const color = {
  tealish: '#24cccd',
  lightTealish: '#73dddd',
  tealishTwo: '#42d3d4',
  blue: '#1779ba',
  orange: '#ee6002',
  salmon: '#ff6663',
  black: '#3a3a3a',
  white: '#ffffff',
  veryLightPink: '#e0e0e0',
  veryLightPinkTwo: '#e5e5e5',
  brownGrey: '#999999',
  brownishGrey: '#666666',
  alpha80: 'rgba(0,0,0,0.8)',
  alpha50: 'rgba(0,0,0,0.5)',
  alphaTealish: 'rgba(36, 204, 205, 0.8)',
  alphaSalmon: 'rgba(255, 102, 99, 0.8)',
  transparent: 'rgba(255,255,255, 0)',
  veryLightGray: '#cccccc',
};

export const modalBackground = color.alpha50;

const primaryGreen = color.tealish;
const primaryRed = color.salmon;

const snackBarSuccess = color.blue;
const snackBarFail = color.orange;

const addAlpha = (hex: string, alpha: number): string =>
  `${hex}${Math.round(alpha * 2.55).toString(16)}`;

export default {
  backgrounds: {
    primaryGreen,
    disabled: color.veryLightPink,
    primaryRed,
    headerGreen: addAlpha(color.tealish, 80),
    lightGreen: color.tealish,
    modalBackground,
    gray: color.brownGrey,
    darkGray: color.black,
    light: color.white,
    lightGreen1: addAlpha(color.tealish, 20),
  },
  borders: {
    gray: color.brownGrey,
    primaryGreen,
    primaryRed,
    lightGray: color.veryLightPinkTwo,
    separatorGrey: color.veryLightPinkTwo,
  },
  icons: {},
  font: {
    snackBarSuccess,
    snackBarFail,
    primaryGreen,
    descBlack: color.black,
    lightText: color.brownGrey,
    darkText: color.black,
    placeHolderText: color.veryLightPink,
    primaryRed,
    gray: color.brownGrey,
    backgroundText: color.tealish,
    invertedLightText: color.white,
    brownishGrey: color.brownishGrey,
    veryLightGray: color.veryLightGray,
  },
  ...color,
};
