import { useState, useEffect } from 'react';
import { GameCard } from './GameCard';

export const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Aquí debes reemplazar 'YOUR_API_KEY' con tu clave de API de RAWG
    const API_KEY = 'ec74fb8641a944889e2993ca771e530d';
    const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setGames(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="game-list" style={styles.gameList}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

const styles = {
  gameList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
};
