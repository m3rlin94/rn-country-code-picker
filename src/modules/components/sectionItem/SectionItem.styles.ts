import EStyleSheet from 'react-native-extended-stylesheet';

import colors from '../../../styles/colors';

const style = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: '10rem',
    marginLeft: '63rem',
    width: '980rem',
    height: '176rem',
    borderColor: colors.borders.lightGray,
    borderWidth: '2rem',
    alignItems: 'center',
  },

  countryWrapper: {
    // paddingBottom: '40rem',
  },

  countryName: {
    paddingLeft: '49rem',
    fontSize: '44rem',
    color: colors.font.darkText,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },

  checkIcon: {
    width: '56rem',
    height: '42rem',
  },

  checkIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: '63rem',
  },
});

export default style;
