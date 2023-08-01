import { useState } from "react";
import styles from "./GamesForm.module.css";

export const GamesForm = () => {
  const [gameData, setGameData] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    plataformas: "",
    fechaLanzamiento: "",
    rating: "",
    generos: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenreChange = (event) => {
    const { value } = event.target;
    setGameData((prevData) => ({
      ...prevData,
      generos: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del juego, por ejemplo, enviarlos a un servidor
    console.log(gameData);
  };

  return (
    <div className={styles.main}>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={gameData.nombre}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Imagen:
            <input
              type="text"
              name="imagen"
              value={gameData.imagen}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={gameData.descripcion}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Plataformas:
            <input
              type="text"
              name="plataformas"
              value={gameData.plataformas}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Fecha de lanzamiento:
            <input
              type="text"
              name="fechaLanzamiento"
              value={gameData.fechaLanzamiento}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Rating:
            <input
              type="text"
              name="rating"
              value={gameData.rating}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Géneros:
            <br />
            <select
              name="generos"
              value={gameData.generos}
              onChange={handleGenreChange}
            >
              <option value="">Selecciona un género</option>
              <option value="accion">Acción</option>
              <option value="aventura">Aventura</option>
              <option value="estrategia">Estrategia</option>
              {/* Agrega más opciones aquí si es necesario */}
            </select>
          </label>

          <button type="submit">Crear nuevo videojuego</button>
        </form>
      </div>
    </div>
  );
};

export default GamesForm;
