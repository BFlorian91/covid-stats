import styles from "./card.module.css";

export default function Card({ country }) {
  return (
    <div className={styles.card}>
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
          <p>
            <span className={styles.card__subtitle}>Confirmed:</span>{" "}
            {country.confirmed}
          </p>
        </section>
        <section className={styles.card__recovered}>
          <p>
            <span className={styles.card__subtitle}>Recovered:</span>{" "}
            {country.recovered}
          </p>
        </section>
        <section className={styles.card__critical}>
          <p>
            <span className={styles.card__subtitle}>Critical:</span>{" "}
            {country.critical}
          </p>
        </section>
        <section className={styles.card__death}>
          <p>
            <span className={styles.card__subtitle}>Deaths:</span>{" "}
            {country.deaths}
          </p>
        </section>
      </section>
    </div>
  );
}
