import styles from "./SearchBar.module.css";
import { SearchFilters } from "./SearchFilters";

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form autoComplete="off">
        <div className={styles.finder}>
          <div className={styles.finder__outer}>
            <div className={styles.finder__inner}>
              <div className={styles.finder__icon}></div>
              <input
                className={styles.finder__input}
                type="text"
                name="q"
                placeholder="Buscar"
              />
            </div>
          </div>
          <SearchFilters/>
        </div>
      </form>
    </div>
  );
};
