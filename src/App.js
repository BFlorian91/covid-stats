import { ClipLoader } from "react-spinners";

import { useFetch } from "./hooks";
import Home from "./pages/home/Home";

import virusSvg from "./images/virus-svg.svg";
import styles from "./styles/app.module.css";

function App() {
  const { data, error, isLoading } = useFetch(
    "https://covid19-api.com/country/all?format=json"
  );

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
        <img className={styles.app__logo} src={virusSvg} alt="virus" />
        <h1 className={styles.app__title}>COVID STATS</h1>
      </header>
      <main className={styles.app__main}>
        <Home data={data} />
      </main>
    </div>
  );
}

export default App;
