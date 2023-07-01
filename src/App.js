import "./App.css";
import React, { useState, useEffect } from "react";

const Saludo = () => {
  const [Name, setName] = useState("");
  return (
    <div>
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
      <p>Hola {Name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Saludo />
    </div>
  );
};

export default App;
