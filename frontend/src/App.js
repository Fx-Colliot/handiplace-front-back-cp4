import "./App.css";
import { Reset } from "styled-reset";

import FirstPage from "./Pages/FirstPage";

export default function App() {
  return (
    <div className="App">
      <Reset />
      <FirstPage />
    </div>
  );
}
