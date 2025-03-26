import { useState } from "react";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openLoginForm = () => setIsOpen(true);
  const closeLoginForm = () => setIsOpen(false);

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
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Entrar</button>
        </div>
      )}
    </>
  );
};

export default LoginForm;
