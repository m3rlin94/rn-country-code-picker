import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import HeaderInput, {HeaderInputProps} from '../headerInput/HeaderInput';

import styles from './ModalHeader.styles';

interface Props extends HeaderInputProps {
  onClose: Function;
  // renderFilter(props: HeaderModalProps): ReactNode;
}

const ModalHeader: React.FC<Props> = props => {
  const {onClose, onChange, inputValue} = props;

  const handlePress = (): void => {
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          hitSlop={styles.hitSlop}
          onPress={handlePress}
          style={styles.closeIconWrapper}>
          <Image
            style={styles.closeIcon}
            source={require('../../../assets/images/close.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Select country</Text>
      </View>
      <HeaderInput onChange={onChange} inputValue={inputValue} />
    </View>
  );
};

export default ModalHeader;
