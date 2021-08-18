import React from "react";
import { Country } from "../../api/types";

interface CountryCardProps {
  country: Country;
}

const CountryCard = (props: CountryCardProps) => (
  <article>{props.country.name}</article>
);

export default CountryCard;
