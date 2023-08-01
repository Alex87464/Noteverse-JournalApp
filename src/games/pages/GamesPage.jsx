import { GameList } from "../components/GameList";
import GameSlider from "../components/GameSlider"
import styles from './GamesPage.module.css';

export const GamesPage = () => {
  return (
    <div className={styles["games-page"]}>
      <GameSlider/>
      <h1>Lista de juegos</h1>
      <GameList/>
    </div>
  )
}
