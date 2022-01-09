import styles from "./pagination.module.css";

export default function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      <div className={styles.pagination}>
        <div className={styles.pagination__content}>
          {pages.map((pageNumber, index) => (
            <a
              className={styles.pagination__link}
              key={index}
              href="!#"
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
