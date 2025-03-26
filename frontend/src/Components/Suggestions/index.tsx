import styles from "./Suggestions.module.css";

const Suggestions = () => {
  return (
    <aside className={styles.suggestions}>
      <h2>Sugerencias</h2>
      <ul>
        <li>Artículos recomendados</li>
        <li>Foros de discusión</li>
        <li>Últimas noticias</li>
        <li>Contenido exclusivo</li>
        <li>Guías de uso</li>
      </ul>
    </aside>
  );
};

export default Suggestions;
