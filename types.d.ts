declare module '*.json' {
  const value: any;
  export default value;
}

interface SectionObject {
  cca2: string;
  start: string;
  currency: Array<string>;
  callingCode: Array<number | string>;
  region: string;
  subregion: string;
  flag: any;
  name: string;
}
