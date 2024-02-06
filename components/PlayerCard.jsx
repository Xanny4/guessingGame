import { observer } from "mobx-react-lite";

const PlayerCard = observer(({ game, i, player }) => {
  return (
    <>
      <div>
        <img style={{ height: 200 }} src={player.picturePath} alt="" />
        <p>{player.name}</p>
        <p>score: {player.points}</p>
        <button onClick={() => game.deletePlayer(i)}>Delete</button>
      </div>
    </>
  );
});
export default PlayerCard;
