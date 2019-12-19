import StyleSheet from 'react-native-extended-stylesheet';
import {colors} from '../../../../src/styles';

const style = StyleSheet.create({
  container: {
    height: '200rem',
    marginHorizontal: '25rem',
    paddingBottom: '25rem',
    flexDirection: 'row',
    borderBottomWidth: '2rem',
    borderBottomColor: colors.tealish,
  },
  flagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10rem',
    height: '100rem',
    backgroundColor: 'white',
  },
  imageFlag: {
    marginRight: '30rem',
    height: '62rem',
    width: '100rem',
  },
  countryCode: {
    fontSize: '56.5rem',
  },
  hitSlop: {
    right: 10,
    left: 10,
    top: 10,
    bottom: 10,
  },
  input: {
    height: '100rem',
    paddingHorizontal: '50rem',
    fontSize: '56.5rem',
    flex: 1,
  },
});

export default style;
