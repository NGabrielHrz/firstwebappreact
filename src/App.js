import "./App.css";

const nombres = ["Néstor", "Leslie", "Sophia", "Arianna", "Gabriel"];

const Saludar = ({ nombres, idioma = "en" }) => {
  // Forma correcta de asignar valores por defecto a un porp
  console.log(idioma);
  const saludo = idioma === "es" ? "Hola a todos" : "Hello every nya";
  return (
    <p>
      {saludo} {nombres}
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Saludar nombres="Gabriel" />
    </div>
  );
};
export default App;
