// pages/index.tsx
import React from "react";
import CountryComponent from "@/components/country";
import { Country } from "@/interfaces/country";

const countries: Country[] = [
  {
    name: "France",
    capital: "Paris",
    population: 67390000,
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83190000,
  },
  {
    name: "Italy",
    capital: "Rome",
    population: 60360000,
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Countries of the World</h1>
      {countries.map((country, index) => (
        <CountryComponent key={index} country={country} />
      ))}
    </div>
  );
};

export default HomePage;
