import { ClipLoader } from "react-spinners";

import { useFetch } from "./hooks";

import "./App.css";
import Home from "./pages/home/Home";

function App() {
  const { data, error, isLoading } = useFetch(
    "https://covid19-api.com/country/all?format=json"
  );

  if (isLoading) {
    return (
      <div className="loading">
        <ClipLoader color={"#FFF"} size={"50px"} />
      </div>
    );
  }
  if (error) return <div className="error">❌ {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">🌿 All Countries 🌴</h1>
      </header>
      <main>
        <Home data={data} />
      </main>
    </div>
  );
}

export default App;
