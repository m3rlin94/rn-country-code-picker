import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../styles/colors';
import Metrics from '../../../styles/Metrics';

const style = StyleSheet.create({
  inputWrapper: {
    backgroundColor: colors.white,
    height: '110rem',
    borderRadius: '55rem',
    marginTop: '86rem',
    marginBottom: '61rem',
    width: '1000rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: Metrics.font.large,
    color: colors.font.darkText,
  },
  searchIcon: {
    marginLeft: '42rem',
    marginRight: '33rem',
    height: '40rem',
    width: '40rem',
  },
  hitSlop: {
    right: 10,
    left: 10,
    top: 10,
    bottom: 10,
  },
});

export default style;
