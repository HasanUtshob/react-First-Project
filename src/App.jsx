import { Suspense } from "react";
import "./App.css";
import Country from "./component/countries/country";

const countryPromise = fetch("https://restcountries.com/v3.1/all").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<p>Data is coming......</p>}>
        <Country countryPromise={countryPromise}></Country>
      </Suspense>
    </>
  );
}

export default App;
