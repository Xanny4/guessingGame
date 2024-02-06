import React, { useState, useReducer } from "react";
import AddPlayer from "../components/AddPlayer";
import PlayersList from "../components/PlayersList";
import { Game } from "../states/Game";
import GamePanel from "../components/GamePanel";
export default function App() {
  const game = new Game();
  return (
    <>
      <AddPlayer game={game} />
      <PlayersList game={game} />
      <GamePanel game={game}></GamePanel>
    </>
  );
}
