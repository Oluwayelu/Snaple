/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { GameContext } from "context";

const useScore = () => {
  const { state, actions } = useContext(GameContext);
  const [highScore, setHighScrore] = useState(
    localStorage.getItem(`${state.level}HighestScore`) || 0
  );

  const oldHighScore = highScore;
  useEffect(() => {
    if (state.status === actions.LOST && state.score > highScore) {
      setHighScrore(state.score);
      localStorage.setItem(`${state.level}HighestScore`, state.score);
    }
  }, [actions.LOST, state.level, state.score, state.status]);

  return { highScore, oldHighScore };
};

export default useScore;
