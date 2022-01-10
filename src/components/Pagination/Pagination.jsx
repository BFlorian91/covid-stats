import styles from "./pagination.module.css";

export default function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      <div className={styles.pagination}>
        <div className={styles.pagination__content}>
          {pages.map((pageNumber, index) => (
            <button
              className={styles.pagination__link}
              key={index}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
