import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Main from './src/modules/components/main/Main';

const App: React.FC = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;
  const {width} = Dimensions.get('window');
  const viewportWidth = width;

  EStyleSheet.build({
    $rem: viewportWidth / 1125,
  });

  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
  );
};

export default App;
