import { useState } from "react";
import styles from "./home.module.css";
import { USER_PER_PAGE } from "../../utils/constants";

import Card from "../../components/Card/Card";

export default function Home({ data, page }) {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountry, setFilteredCountry] = useState("");

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        placeholder="Search"
        value={searchCountry}
        onChange={handleSearch}
      />
      <div className={styles.home}>
        <section className={styles.home__contents}>
          {searchCountry === ""
            ? data.slice(startIndex, startIndex + USER_PER_PAGE)
                .map((country, index) => (
                  <div key={index}>
                    <Card index={index} country={country} />
                  </div>
                ))
            : data.filter((country) =>
                  country.country
                    .toLowerCase()
                    .includes(searchCountry.toLowerCase())
                )
                .map((country, index) => (
                  <div key={index}>
                    <Card index={index} country={country} />
                  </div>
                ))}
        </section>
      </div>
    </div>
  );
}
