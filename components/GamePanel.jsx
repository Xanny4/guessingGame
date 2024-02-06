import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const GamePanel = observer(({ game }) => {
  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        game.guessLetter();

        if (!game.gameStarted) {
          clearInterval(intervalId);
        }
      }, 1000);
    };

    if (game.gameStarted) {
      startInterval();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [game.gameStarted, game.guessLetter]);
  return (
    <>
      <div>
        <h3>{game.shownWord}</h3>
        {game.gameStarted || game.players.length < 2 ? null : (
          <button onClick={() => game.generateWord()}>Start Game</button>
        )}
      </div>
    </>
  );
});

export default GamePanel;
