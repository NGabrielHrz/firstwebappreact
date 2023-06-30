import "./App.css";

const nombres = ["Néstor", "Leslie", "Sophia", "Arianna", "Gabriel"];

function getNombres() {
  const elementList = [];
  for (let i = 0; i < nombres.length; i++) {
    elementList.push(<li>{nombres[i]}</li>);
  }
  return elementList;
}

const Nombres = () => {
  return <ul>{getNombres()}</ul>;
};

const App = () => {
  return (
    <div>
      <Nombres />
    </div>
  );
};

export default App;
