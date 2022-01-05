import styles from "./home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.home}>
      <section className={styles.home__contents}>
        {data.map((country, index) => (
          <div key={index} className={styles.card}>
            {country.code && (
              <img
                src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                alt="flags"
                className={styles.card__image}
              />
            )}
            <section className={styles.card__country}>
              <p>
                {country.country} <br />
              </p>
            </section>
            <section className={styles.card__stats}>
              <section className={styles.card__confirmed}>
                <p>Confirmed: {country.confirmed}</p>
              </section>
              <section className={styles.card__recovered}>
                <p>Recovered: {country.recovered}</p>
              </section>
              <section className={styles.card__critical}>
                <p>Critical: {country.critical}</p>
              </section>
              <section className={styles.card__death}>
                <p>Deaths: {country.deaths}</p>
              </section>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
