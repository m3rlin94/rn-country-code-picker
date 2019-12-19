import React, {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';
import Picker from '../picker/Picker';
import ModalHeader from '../modalHeader/ModalHeader';
import {
  getAllSectionsData,
  search,
  getAllCountriesData,
} from '../../../../src/modules/services';

import styles from './Modal.styles';

interface Props {
  toggleState: boolean;
  onClose: Function;
}

const ModalComponent: React.FC<Props> = props => {
  const {toggleState, onClose} = props;
  const [filterInput, setFilterInput] = useState<string>('');
  const data = getAllCountriesData();
  console.log('*** data', data);
  const [flatListData, setFlatListData] = useState<any>(data);

  const sectionListData = getAllSectionsData();

  const handleFilterInputChange = (e: any): void => {
    setFilterInput(e.text);
    // setFlatListData();
    const xxx = search(e.text, flatListData);
    console.log('**** search', xxx);
  };

  return (
    <SafeAreaView style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={toggleState}
        // onRequestClose={}
      >
        <ModalHeader
          onClose={onClose}
          inputValue={filterInput}
          onChange={handleFilterInputChange}
        />
        <Picker
          withSections={filterInput !== ''}
          sections={sectionListData}
          flatListData={flatListData}
          onFlatListPress={onClose}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default ModalComponent;
