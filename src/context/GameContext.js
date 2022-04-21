import React, { useReducer } from "react";
import * as actions from "_actions/types"
import { gameReducer, gameInitState  } from "_reducers";

export const GameContext = React.createContext();

export default function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, gameInitState);
  const providerValue = {
    state,
    dispatch,
    actions,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
}
