/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const GameCard = ({ game }) => {
  const { name, genres, background_image, id } = game;

  const getGenres = () => {
    return genres.map((genre) => genre.name).join(", ");
  };

  return (
    <div className="game-card" style={styles.gameCard}>
      <img src={background_image} alt={name} style={styles.image} />
      <h2 style={styles.title}>{name}</h2>
      <p style={styles.genres}>Genres: {getGenres()}</p>
      <Link to={`/details/${id}`}>
        <button style={styles.button}>More details</button>
      </Link>
    </div>
  );
};

const styles = {
  gameCard: {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0",
    marginBottom: "5px",
  },
  genres: {
    fontSize: "0.9rem",
    color: "#fff",
    margin: "0",
    marginBottom: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#e0280c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
