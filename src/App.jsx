import styles from "./chess-board.module.scss";
import ChessBoard from "./ChessBoard";

export default function App() {
  return (
    <main className={styles.app}>
      <ChessBoard />
    </main>
  );
}
