export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: Region;
  subregion: string;
  population: number;
  nativeName: string;
  currencies: Currency[];
  languages: Language[];
  flag: string;
}

export interface Currency {
  code: null | string;
  name: null | string;
  symbol: null | string;
}

export interface Language {
  iso639_1: null | string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Empty = '',
  Europe = 'Europe',
  Oceania = 'Oceania',
  Polar = 'Polar',
}
