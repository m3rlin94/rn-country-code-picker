import React from 'react';
import {TouchableOpacity, Image, Text, View, TextInput} from 'react-native';

import styles from './NumberInput.styles';

interface Props {
  countryDetails: SectionObject;
  phoneNumber: string;

  onNumberChange: Function;
}

const NumberInput: React.FC<Props> = props => {
  const {
    countryDetails: {flag, callingCode},
    phoneNumber,
    onNumberChange,
  } = props;

  const handleNumberChange = (e: any): void => {
    onNumberChange(e);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flagButton} hitSlop={styles.hitSlop}>
        <Image
          resizeMode="stretch"
          style={styles.imageFlag}
          source={{
            uri: flag,
          }}
        />
        <Text style={styles.countryCode}>{`+${callingCode[0]}`}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChange={handleNumberChange}
      />
    </View>
  );
};

export default NumberInput;
