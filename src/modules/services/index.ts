import Fuse from 'fuse.js';

import countriesJson from '../../assets/data/countries-images.json';
import sectionsJson from '../../assets/data/countries-section.json';

export const getAllCountriesData = () => {
  return countriesJson;
};

export const getAllSectionsData = () => {
  return sectionsJson;
};

const DEFAULT_FUSE_OPTION = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'callingCode'],
};
let fuse: Fuse<SectionObject, any>;
export const search = (
  filter: string = '',
  data: Array<SectionObject> = [],
  options: Fuse.FuseOptions<any> = DEFAULT_FUSE_OPTION,
) => {
  console.log('search method', data);
  if (data.length === 0) {
    return [];
  }
  if (!fuse) {
    fuse = new Fuse<SectionObject, any>(data, options);
  }
  if (filter && filter !== '') {
    const result = fuse.search(filter);
    return result;
  } else {
    return data;
  }
};
