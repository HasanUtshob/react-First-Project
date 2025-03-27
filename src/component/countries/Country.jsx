import React, { use, useState } from "react";
import Countries from "../country/Countries";
import "./country.css";

const country = ({ countryPromise }) => {
  const [Visited, setVisited] = useState([]);
  const [VisitedFlag, setVisitedFlag] = useState([]);
  const countryData = use(countryPromise);

  const handleflag = (flag) => {
    const newVisitedFlag = [...VisitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  const handleVisitedCountry = (country) => {
    const countryName = [...Visited, country];
    setVisited(countryName);
  };

  return (
    <div>
      <h1>World Countries: {countryData.length}</h1>
      <h3>Country Visited You are: {Visited.length}</h3>
      <ol>
        {Visited.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>
      <div>
        {VisitedFlag.map((flag, index) => (
          <img key={index} src={flag} />
        ))}
      </div>

      <div className="Country">
        {countryData.map((country) => (
          <Countries
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleflag={handleflag}
            country={country}
          ></Countries>
        ))}
      </div>
    </div>
  );
};

export default country;
