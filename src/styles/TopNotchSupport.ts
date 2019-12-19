import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Device ID
const DEVICE_ID = DeviceInfo.getDeviceId();

/**
 * We keep a map of all device IDs with notches and their appropriate top padding.
 * Before you call this stupid, let's see if you can give a valid alternative.
 * Go ahead, I'll wait.
 *
 * PS: I'm referencing this list for the iOS devices
 * https://github.com/rebeccahughes/react-native-device-info/blob/master/ios/RNDeviceInfo/RNDeviceInfo.m#L62
 */
const TopNotchPaddingMap = {
  'iPhone X': 35,
  'iPhone10,3': 35,
  'iPhone10,6': 35,
  'iPhone XS': 35,
  'iPhone11,2': 35,
  'iPhone XS Max': 35,
  'iPhone11,4': 35,
  'iPhone11,6': 35,
  'iPhone11,8': 35,
  Pixel3: 24,
  'Pixel3 XL': 30,
  SDM636: 30, // nokia 6.1
  default: Platform.OS === 'ios' ? 20 : DeviceInfo.hasNotch() ? 24 : 20,
};

// DeviceInfo.getModel() gave => Nokia 6.1 Plus

/**
 * Gets the top padding for the current device
 * @return {number} The padding necessary to move past the notch
 */
export const TopPaddingOfCurrentDevice = (): number =>
  TopNotchPaddingMap[DEVICE_ID] || TopNotchPaddingMap.default;
