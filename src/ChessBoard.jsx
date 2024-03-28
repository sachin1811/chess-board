import styles from "./chess-board.module.scss";
import { colorTile } from "./utils";

const ChessBoard = () => {
  const chessPieces = {
    R: "♜",
    N: "♞",
    B: "♝",
    Q: "♛",
    K: "♚",
    P: "♟",
    r: "♖",
    n: "♘",
    b: "♗",
    q: "♕",
    k: "♔",
    p: "♙",
    " ": " ",
  };

  const boardRows =
    "RNBQKBNR" +
    "PPPPPPPP" +
    "        " +
    "        " +
    "        " +
    "        " +
    "pppppppp" +
    "rnbqkbnr";

  return (
    <section className={styles.chess}>
      {boardRows.split("").map((piece, i) => {
        return (
          <div
            key={i}
            className={`${styles.tile} ${
              colorTile(i) ? styles.tile_color : ""
            }`}
          >
            {chessPieces[piece]}
          </div>
        );
      })}
    </section>
  );
};

export default ChessBoard;
