import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//Ahora, en cualquier parte del frontend donde necesites hacer peticiones,
// puedes importar api en lugar de repetir la URL base en cada solicitud.
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Agregar una función para obtener el perfil del usuario
export const getProfile = async () => {
	const token = localStorage.getItem("token"); // Obtiene el token almacenado
  
	if (!token) {
	  throw new Error("No hay token disponible");
	}
  
	try {
	  const response = await axios.get(`${API_URL}/users/profile`, {
		headers: {
		  Authorization: `Bearer ${token}`, // Enviar token en la cabecera
		},
	  });
	  return response.data; // Retorna los datos del usuario
	} catch (error: any) {
	  throw new Error(error.response?.data?.error || "Error obteniendo perfil");
	}
  };
