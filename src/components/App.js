import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
