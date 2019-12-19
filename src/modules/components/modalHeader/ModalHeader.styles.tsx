import StyleSheet from 'react-native-extended-stylesheet';

import colors from '../../../styles/colors';
// import { FontFamilySemiBold } from '../../../styles/fonts';
import Metrics, {viewportHeight} from '../../../styles/Metrics';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopRightRadius: '20rem',
    borderTopLeftRadius: '20rem',
    backgroundColor: colors.backgrounds.primaryGreen,
    paddingTop: '97rem',
    marginTop: viewportHeight / 16,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  hitSlop: {
    top: 10,
    right: 10,
    left: 10,
    bottom: 10,
  },
  closeIcon: {
    width: '44rem',
    height: '45rem',
  },
  title: {
    // ...FontFamilySemiBold,
    fontSize: Metrics.font.primary,
    color: colors.white,
  },
  closeIconWrapper: {
    position: 'absolute',
    left: '74rem',
  },
});

export default style;
