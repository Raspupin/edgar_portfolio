import { useState } from "react";
import helldiverLogo from "./assets/helldivers_salute.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={helldiverLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Edgar Temkin's Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">בובי ז'וז'י</p>
    </>
  );
}

export default App;
