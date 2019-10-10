import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently: <span data-test="counter">0</span>{" "}
      </h1>
      <button data-test="increment-button">Increment counter</button>
    </div>
  );
}

export default App;
