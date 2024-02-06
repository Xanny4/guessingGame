import { observer } from "mobx-react-lite";
import PlayerCard from "../components/PlayerCard";

const PlayersList = observer(({ game }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {game.players.map((player, i) => (
          <PlayerCard game={game} player={player} i={i} />
        ))}
      </div>
    </>
  );
});
export default PlayersList;
