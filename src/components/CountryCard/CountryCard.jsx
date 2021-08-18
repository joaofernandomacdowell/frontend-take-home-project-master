import React from "react";
import PropTypes from "prop-types";

const CountryCard = (props) => <article>{props.country.name}</article>;

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
