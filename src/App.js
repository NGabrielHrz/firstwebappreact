import logo from "./logo.svg";
import "./App.css";

function SaludoenIdiomas({ idioma }) {
  if (idioma === "en") {
    return <span>Hello every nya</span>;
  } else {
    return <span>Hola a todos nya</span>;
  }
}

const Saludo = () => {
  const Name = "Gabriel";
  return (
    <p>
      <SaludoenIdiomas idioma="en" /> {`${Name} :)`}
    </p>
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
