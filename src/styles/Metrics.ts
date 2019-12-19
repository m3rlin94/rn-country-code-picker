import Memoize from 'memoize-one';
import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

/**
 * Viewport width
 * @type {Number}
 */
export const viewportWidth = width;

/**
 * Viewport height
 * @type {Number}
 */
export const viewportHeight = height;

/**
 * Viewport width of the design
 */
const designViewPortWidth = 375;

export const calculateRem = Memoize((value: number) => `${value * 3}rem`);
const metrics = {
  font: {
    // gigantic: '30rem',
    // bigger: '25rem',
    big: '72rem',
    // hugest: '30rem',
    // c: '24rem',
    // biggerThanMassive: '18rem',
    // massive: '18rem',
    huge: '56.5rem',
    primary: '56rem',
    // giant: '15rem',
    large: '44rem',
    medium: '43.5rem',
    regular: '36.5rem',
    small: '36rem',
    tiny: '32rem',
  },
  margin: {
    contentHorizontal: 24,
    top: 28,
    bottom: 28,
  },
  header: {
    height: 120,
    statusBarHeight: Platform.OS === 'ios' ? 44 : 24,
  },
};

export default metrics;
