import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Pages/CountryDetail.module.css";

const Detail = () => {
  const { code } = useParams(); 
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    fetchCountry();
  }, [code]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className={styles.detailContainer}>
  <div className={styles.imageContainer}>
    <img src={country.flags.svg} alt={country.name.common} />
  </div>
  <div className={styles.detailsContainer}>
    <h2>{country.name.common}</h2>
    <p><strong>Capital:</strong> {country.capital?.[0]}</p>
    <p><strong>Border:</strong> {country.borders?.[1]}</p>
    <p><strong>Region:</strong> {country.region}</p>
    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>

  </div>
<button className={styles.Button}><a href="Detail.jsx">home page</a></button>
</div> 



  );
};

export default Detail;
