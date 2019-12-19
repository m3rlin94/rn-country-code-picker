import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import ModalComponent from '../modal/Modal';

interface Props {}

const Main: React.FC<Props> = props => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleButtonPress = (): void => {
    setToggle(!toggle);
  };

  const handleClose = (): void => {
    setToggle(false);
  };

  return (
    <>
      <Button title={'Click Me'} onPress={handleButtonPress} />
      <ModalComponent toggleState={toggle} onClose={handleClose} />
    </>
  );
};

export default Main;
