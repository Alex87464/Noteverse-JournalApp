import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailsPage = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    // Función para obtener los detalles del juego desde la API
    const fetchGameDetails = async () => {
      try {
        // Reemplaza 'YOUR_API_KEY' con tu clave de API de RAWG
        const API_KEY = "ec74fb8641a944889e2993ca771e530d";
        const API_URL = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
        
        const response = await fetch(API_URL);
        const data = await response.json();

        // Filtrar solo la descripción en inglés
        const parser = new DOMParser();
        const htmlDescription = parser.parseFromString(data.description, "text/html");
        const englishDescription = htmlDescription.querySelector("p:not([lang='es'])")?.innerText;

        setGameDetails({
          ...data,
          description: englishDescription || "",
        });
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    // Llamamos a la función para obtener los detalles del juego
    fetchGameDetails();
  }, [id]);

  // Mostramos un mensaje mientras se obtienen los detalles del juego
  if (!gameDetails) {
    return <div style={styles.loading}>Loading...</div>;
  }

  const {
    name,
    genres,
    background_image,
    platforms,
    description,
    released,
    rating,
  } = gameDetails;

  return (
    <div style={styles.container}>
      <Link to="/games" style={styles.backButton}>
        Volver atrás
      </Link>
      <h2 style={{ ...styles.title, color: 'blue' }}>{name}</h2>
      <img src={background_image} alt={name} style={styles.image} />
      <p style={{ ...styles.details, color: 'blue' }}>ID: {id}</p>
      <p style={{ ...styles.details, color: 'blue' }}>
        Genres: {genres.map((genre) => genre.name).join(", ")}
      </p>
      <p style={{ ...styles.details, color: 'blue' }}>
        Platforms:{" "}
        {platforms.map((platform) => platform.platform.name).join(", ")}
      </p>
      <div
        style={{ ...styles.description, color: 'blue', textAlign: 'justify' }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <p style={{ ...styles.details, color: 'blue' }}>Released: {released}</p>
      <p style={{ ...styles.details, color: 'blue' }}>Rating: {rating}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  loading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '20px',
    color: 'blue',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  details: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    textAlign: 'justify',
    lineHeight: '1.6',
  },
  backButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default DetailsPage;
