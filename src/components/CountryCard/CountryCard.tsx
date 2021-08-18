import React from 'react';
import { Country } from '../../api/types';

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps): JSX.Element => (
  <article>{country.name}</article>
);

export default CountryCard;
