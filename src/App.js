import logo from "./logo.svg";
import "./App.css";

const Saludo = () => {
  const Name = "Gabriel";
  const Lenguage = "en";

  return (
    <div>
      {Lenguage === "es" ? <p>Hola a todos nya</p> : <p>Hello every nya</p>}
    </div>
  );
};

const App = () => {
  return (
    <h1>
      <Saludo />
    </h1>
  );
};

export default App;
