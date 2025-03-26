import styles from "./Sidebar.module.css";

const menuItems = [
  "Historial",
  "Mi perfil",
  "Configuración",
  "Preferencias",
  "Cerrar sesión",
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2>Perfil</h2>
      <input type="text" placeholder="Buscar..." />
      <button className={styles.glowBtn}>Buscar</button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
