import { useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";

export const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const openLoginForm = () => setIsOpen(true);
  const closeLoginForm = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/users/login",
        {
          email,
          password,
        }
      );

      const { token, mensaje } = response.data;

      // Guardar token en localStorage
      localStorage.setItem("token", token);

      setMensaje(mensaje || "Inicio de sesión exitoso"); // Mostramos el mensaje del backend (éxito)
      // (Opcional) Redirigir o actualizar estado de autenticación global
      // window.location.href = "/dashboard";  // Redirigir a otra página
    } catch (error: any) {
      setMensaje(error.response?.data?.error || "Error en la conexión"); // Mostramos error si falla
    }
  };

  return (
    <>
      <button className={styles.loginBtn} onClick={openLoginForm}>
        Iniciar Sesión
      </button>
      {isOpen && (
        <div className={styles.loginForm}>
          <button className={styles.closeBtn} onClick={closeLoginForm}>
            X
          </button>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          {mensaje && <p>{mensaje}</p>}
        </div>
      )}
    </>
  );
};

export default LoginForm;
