import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../styles/colors';

const style = EStyleSheet.create({
  sectionHeader: {
    marginTop: '60rem',
    marginLeft: '60rem',
    marginBottom: '40rem',
    fontSize: '44rem',
    color: colors.font.darkText,
  },
  currentLocationTitleWrapper: {
    paddingTop: '58rem',
  },
  currentLocationTitle: {
    paddingLeft: '63rem',
    paddingBottom: '40rem',
    fontSize: '44rem',
    color: colors.font.darkText,
  },
  currentLocationCountry: {
    flexDirection: 'row',
    marginLeft: '63rem',
    paddingLeft: '52rem',
    width: '980rem',
    height: '163rem',
    backgroundColor: colors.white,
    alignItems: 'center',
    borderColor: colors.borders.lightGray,
    borderWidth: '2rem',
    borderRadius: '6rem',
    justifyContent: 'space-between',
    paddingRight: '53rem',
  },
});

export default style;
