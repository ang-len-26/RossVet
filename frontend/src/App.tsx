import Header from "./Components/Header";
import AllContent from "./Components/AllContent";
import { useEffect } from "react";
import axios from "axios";
import Profile from "./Profile.tsx";
function App() {
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/ruta-de-prueba")
      .then((response) => console.log("Conexión exitosa:", response.data))
      .catch((error) => console.error("Error en la conexión:", error));
  }, []);
  return (
    <div>
      <Header />
      <AllContent />
      <Profile />
    </div>
  );
}
export default App;
