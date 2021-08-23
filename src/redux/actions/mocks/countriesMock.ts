import { Country } from '../../../api/types';

const countriesMock: Country[] = [
  {
    name: 'American Samoa',
    alpha3Code: 'ASM',
    capital: 'Pago Pago',
    region: 'Oceania',
    subregion: 'Polynesia',
    population: 57100,
    nativeName: 'American Samoa',
    currencies: [
      {
        code: 'USD',
        name: 'United State Dollar',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'sm',
        iso639_2: 'smo',
        name: 'Samoan',
        nativeName: "gagana fa'a Samoa",
      },
    ],
    flag: 'https://restcountries.eu/data/asm.svg',
  },
  {
    name: 'Cameroon',
    alpha3Code: 'CMR',
    capital: 'Yaoundé',
    region: 'Africa',
    subregion: 'Middle Africa',
    population: 22709892,
    nativeName: 'Cameroon',
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://restcountries.eu/data/cmr.svg',
  },
  {
    name: 'United States of America',
    alpha3Code: 'USA',
    capital: 'Washington, D.C.',
    region: 'Americas',
    subregion: 'Northern America',
    population: 323947000,
    nativeName: 'United States',
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://restcountries.eu/data/usa.svg',
  },
  {
    name: 'Virgin Islands (U.S.)',
    alpha3Code: 'VIR',
    capital: 'Charlotte Amalie',
    region: 'Americas',
    subregion: 'Caribbean',
    population: 114743,
    nativeName: 'Virgin Islands of the United States',
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://restcountries.eu/data/vir.svg',
  },
];

export default countriesMock;
