import React, {SyntheticEvent} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Flag from '../flag/Flag';

import styles from './SectionItem.styles';

interface Props {
  countryDetails: SectionObject;
  isCurrentLocation?: boolean;

  onPress: Function;
}

const SectionItem: React.FC<Props> = props => {
  const {countryDetails, isCurrentLocation, onPress} = props;
  const {flag, name: countryName} = countryDetails;

  let renderCheckIcon = null;

  const handlePress = (): void => {
    onPress(countryDetails);
  };

  if (isCurrentLocation) {
    renderCheckIcon = (
      <Image
        resizeMode="contain"
        style={styles.checkIcon}
        source={require('../../../assets/images/check.png')}
      />
    );
  }

  return (
    <TouchableOpacity style={[styles.container]} onPress={handlePress}>
      <Flag flag={flag} />
      <Text style={styles.countryName}>{countryName}</Text>
      <View style={styles.checkIconContainer}>{renderCheckIcon}</View>
    </TouchableOpacity>
  );
};

SectionItem.defaultProps = {
  isCurrentLocation: false,
};

export default SectionItem;
