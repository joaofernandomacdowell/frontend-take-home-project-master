import React, { useState, useEffect } from "react";

import CountryCard from "../components/CountryCard";
import { Country } from "../api/types";

const ALL_COUNTRIES_ENDPOINT = "https://restcountries.eu/rest/v2/all";

const fetchCountryApiData = async (setter: Function) => {
  const response = await fetch(ALL_COUNTRIES_ENDPOINT);
  const countries = await response.json();
  setter(countries);
  console.log(countries);
};

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountryApiData(setCountries);
  }, []);

  return (
    <>
      {countries.map((country: Country) => (
        <CountryCard key={country.name.toLowerCase()} country={country} />
      ))}
    </>
  );
};

export default Countries;
