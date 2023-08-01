import styles from "./SearchFilters.module.css";

export const SearchFilters = () => {
  return (
    <div className={styles.filters}>
      <label>
        GÉNEROS:&nbsp;
        {/* <br /> */}
        <select name="generos">
          <option value="">Selecciona un género</option>
          <option value="accion">Acción</option>
          <option value="aventura">Aventura</option>
          <option value="estrategia">Estrategia</option>
          {/* Agrega más opciones aquí si es necesario */}
        </select>
      </label>
      <label>
        &nbsp;UBICACIÓN:&nbsp;
        {/* <br /> */}
        <select name="location">
          <option value="">Selecciona una ubicación</option>
          <option value="localDb">Base de datos</option>
          <option value="rawgApi">RAWG API</option>
          {/* Agrega más opciones aquí si es necesario */}
        </select>
      </label>
    </div>
  );
};
