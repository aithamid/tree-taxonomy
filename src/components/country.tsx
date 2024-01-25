// components/CountryComponent.tsx
import React from 'react';
import { Country } from '@/interfaces/country';

const CountryComponent: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryComponent;
