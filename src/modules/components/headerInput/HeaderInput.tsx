import React from 'react';
import {View, Image, TextInput} from 'react-native';

import colors from '../../../styles/colors';
import styles from './HeaderInput.styles';

export interface HeaderInputProps {
  onChange: Function;
  inputValue: string;
}

const HeaderInput: React.FC<HeaderInputProps> = props => {
  const {inputValue, onChange} = props;
  const handleChange = (e: any): void => {
    onChange(e);
  };
  return (
    <View style={styles.inputWrapper}>
      <Image
        resizeMode="contain"
        style={styles.searchIcon}
        source={require('../../../assets/images/search.png')}
      />
      <TextInput
        hitSlop={styles.hitSlop}
        testID="text-input-country-filter"
        autoCorrect={false}
        placeholderTextColor={colors.font.veryLightGray}
        placeholder="Search for a country"
        style={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
    </View>
  );
};

export default HeaderInput;
