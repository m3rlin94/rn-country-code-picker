import React from 'react';
import SectionListComponent from '../sectionList/SectionList';
import FlatListComponent from '../flatList/FlatList';

interface Props {
  currentLocation?: any;
  sections: any;
  withSections?: boolean;
  flatListData: any;
  onFlatListPress: Function;
}

const Picker: React.FC<Props> = props => {
  const {withSections, sections, flatListData, onFlatListPress} = props;
  let content = <SectionListComponent sections={sections} />;

  if (!withSections) {
    content = (
      <FlatListComponent data={flatListData} onPress={onFlatListPress} />
    );
  }

  return content;
};

Picker.defaultProps = {
  withSections: false,
};

export default Picker;
