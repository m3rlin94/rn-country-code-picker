import StyleSheet from 'react-native-extended-stylesheet';
import {viewportWidth} from '../../../../src/styles/Metrics';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display: 'flex',
    width: viewportWidth,
  },
});

export default style;
