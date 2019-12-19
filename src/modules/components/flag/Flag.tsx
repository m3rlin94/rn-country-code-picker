import React from 'react';
import {Text, Image, View} from 'react-native';

import styles from './Flag.styles';

interface Props {
  flag: any;
}

const Flag: React.FC<Props> = props => {
  const {flag} = props;
  return (
    <Image
      resizeMode="stretch"
      style={styles.imageFlag}
      source={{
        uri: flag,
      }}
    />
  );
};

export default Flag;
