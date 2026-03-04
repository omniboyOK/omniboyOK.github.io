import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IconButton from "./components/IconButton";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-container">
      <div className="content-area">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        <IconButton
          className="icon"
          iconName="arrow_clockwise"
          key={"same"}
          label="label"
          onClick={() => null}
        />

        {/* Buttons for desktop */}
        <div className="desktop-buttons">
          <button onClick={() => setActiveTab(0)}>Opción 1</button>
          <button onClick={() => setActiveTab(1)}>Opción 2</button>
          <button onClick={() => setActiveTab(2)}>Opción 3</button>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="mobile-navbar">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => setActiveTab(0)}
        >
          Opción 1
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          Opción 2
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          Opción 3
        </button>
      </div>
    </div>
  );
}

export default App;
