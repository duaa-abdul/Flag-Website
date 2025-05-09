import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Link ,  useOutletContext } from "react-router-dom";

const Home = () => {
    const { searchQuery } = useOutletContext();
    const [countries, setCountries] = useState([]);
    

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                setCountries(data);

            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);



    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>World Flags</h1>
           
                <div className={styles.grid}>
                    {filteredCountries.map((country, index) => (
                        <Link
                            to={`/country/${country.cca3}`} 
                            key={index}
                            className={styles.card}
                        >
                            <img src={country.flags.png} alt={country.name.common} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
