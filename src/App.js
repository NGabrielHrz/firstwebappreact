import "./App.css";

const nombres = ["Néstor", "Leslie", "Sophia", "Arianna", "Gabriel"];

const Saludar = ({ nombres, idioma }) => {
  console.log(idioma);
  const saludo = idioma === "es" ? "Hola a todos" : "Hello every nya";
  return (
    <p>
      {saludo} {nombres}
    </p>
  );
};

Saludar.defaultProps = {
  idioma: "en",
}; // Forma no recomendada para asignar valores por defecto a un prop

const App = () => {
  return (
    <div>
      <Saludar nombres="Gabriel" />
    </div>
  );
};
export default App;
