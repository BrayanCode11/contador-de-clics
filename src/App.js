import "./App.css";
import Boton from "./componentes/Boton";
import freCodeCampLogo from "./images/freecodecamp-logo.png";
function App() {

  const manejarClic = () => {
    console.log("Se hizo clic");
  }
  const reiniciarContador = () => {
    console.log("Se reinició el contador");
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-contador">
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
