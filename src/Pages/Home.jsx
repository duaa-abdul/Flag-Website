import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Link, useOutletContext } from "react-router-dom";

const Home = () => {
    const { searchQuery } = useOutletContext();
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 12;

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


    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>World Flags 🏳️  </h1>

            <div className={styles.grid}>
                {currentCountries.map((country, index) => (
                    <Link
                        to={`/country/${country.cca3}`}
                        key={index}
                        className={styles.card}
                    >
                        <img src={country.flags.png} alt={country.name.common} />
                    </Link>
                ))}
            </div>

            <div className={styles.pagination}>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={styles.pageButton}
                >
                    Previous
                </button>

                <span className={styles.pageIndicator}>Page {currentPage} of {totalPages}</span>

                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={styles.pageButton}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Home;
