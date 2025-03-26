import { useState } from "react";
import "./styles.css";
import LoginForm from "./LoginForm";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Función para manejar la apertura/cierre de dropdowns
  const handleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <header>
      <div className="logo">MiLogo</div>
      <input type="text" placeholder="Buscar..." />
      <nav>
        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown("inicio")}
          onMouseLeave={() => handleDropdown("inicio")}
        >
          <a href="#">Inicio</a>
          {openDropdown === "inicio" && (
            <div className="dropdown-content">
              <a href="#">Subopción 1</a>
              <a href="#">Subopción 2</a>
              <a href="#">Subopción 3</a>
            </div>
          )}
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown("nosotros")}
          onMouseLeave={() => handleDropdown("nosotros")}
        >
          <a href="#">Sobre Nosotros</a>
          {openDropdown === "nosotros" && (
            <div className="dropdown-content">
              <a href="#">Historia</a>
              <a href="#">Equipo</a>
              <a href="#">Visión</a>
            </div>
          )}
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown("servicios")}
          onMouseLeave={() => handleDropdown("servicios")}
        >
          <a href="#">Servicios</a>
          {openDropdown === "servicios" && (
            <div className="dropdown-content">
              <a href="#">Consultoría</a>
              <a href="#">Desarrollo</a>
              <a href="#">Soporte</a>
            </div>
          )}
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown("contacto")}
          onMouseLeave={() => handleDropdown("contacto")}
        >
          <a href="#">Contacto</a>
          {openDropdown === "contacto" && (
            <div className="dropdown-content">
              <a href="#">Formulario</a>
              <a href="#">Ubicación</a>
              <a href="#">Redes Sociales</a>
            </div>
          )}
        </div>
      </nav>
      <LoginForm />
    </header>
  );
};
export default Header;
