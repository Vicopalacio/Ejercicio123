import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";


function App() {
  let holaAmigo = "My friend";

  return (
    <>
      <Ejercicio1></Ejercicio1>
      <Ejercicio2 saludo={holaAmigo}></Ejercicio2>
      <Ejercicio3></Ejercicio3>
    </>
  );
}

export default App;
