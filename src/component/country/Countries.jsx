import React, { useState } from "react";
import "./countrys.css";

const Countries = ({ country, handleVisitedCountry, handleflag }) => {
  const [Visit, setVisit] = useState(false);
  //   console.log(handleVisitedCountry);
  const handleButton = () => {
    if (Visit) {
      setVisit(false);
    } else {
      setVisit(true);
    }
    handleVisitedCountry(country);
  };
  return (
    <div className={`CountiresStyle  ${Visit && "country-visited"}`}>
      <p>Name : {country.name.common}</p>
      <p>Name : {country.name.official}</p>
      <p>City : {country.capital}</p>
      <p>Independent : {country.independent ? "Free" : "Not Free"}</p>
      <img className="imgSize" src={country.flags.png} alt="" />
      <button onClick={handleButton}>
        {Visit ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleflag(country.flags.png)}>
        Visited Flag
      </button>
    </div>
  );
};

export default Countries;
