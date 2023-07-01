import "./App.css";
import React, { useState, useEffect } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Me ejecute");
  }, []);

  return (
    <div className="App">
      <p className="Text1">El boton fue precionado {counter} veces</p>
      <button onClick={() => setCounter(counter + 1)} className="Button1">
        Click me!!
      </button>
    </div>
  );
};

const App = () => <Button />;

export default App;
