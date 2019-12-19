import React from 'react';
import {FlatList} from 'react-native';
import SectionItem from '../sectionItem/SectionItem';

interface Props {
  data: any;
  onPress?: Function;
}

const FlatListComponent: React.FC<Props> = props => {
  const {data} = props;

  const handleItemPress = (object: any): void => {
    console.log('item on press', object);
  };

  const handleKeyExtractor = (item: any): any => {
    return item.id;
  };

  const renderBody = (country: SectionObject): JSX.Element => {
    return (
      <SectionItem
        countryDetails={country}
        isCurrentLocation={false}
        onPress={handleItemPress}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderBody(item)}
      keyExtractor={handleKeyExtractor}
    />
  );
};

export default FlatListComponent;
