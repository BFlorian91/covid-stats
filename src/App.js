import { useState } from "react";
import { ClipLoader } from "react-spinners";

import { useFetch } from "./hooks";
import Home from "./pages/home/Home";
import Pagination from "./components/Pagination/Pagination";
import { USER_PER_PAGE } from "./utils/constants";

import styles from "./styles/app.module.css";

function App() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data, error, isLoading } = useFetch(
    "https://covid19-api.com/country/all?format=json"
  );

  const handleClick = pageNumber => {
    setPage(pageNumber);
  }

  if (data && totalPages === 0) {
    setTotalPages(Math.ceil(data.length / USER_PER_PAGE));
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <ClipLoader color={"#FFF"} size={"50px"} />
      </div>
    );
  }
  if (error) return <div className={styles.error}>❌ {error}</div>;

  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__title}>🌿 All Countries 🌴</h1>
      </header>
      <main className={styles.app__main}>
        <Home data={data} page={page} />
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
