import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";

function App() {
  let holaAmigo = "My friend";

  return (
    <>
      <Ejercicio1></Ejercicio1>
      <Ejercicio2 saludo={holaAmigo}></Ejercicio2>
    </>
  );
}

export default App;
