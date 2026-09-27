import { useContext, useEffect, useState } from "react";
import { GameContext } from "context";

function readHighScore(level) {
  return Number(localStorage.getItem(`${level}HighestScore`)) || 0;
}

const useScore = () => {
  const { state, actions } = useContext(GameContext);
  const [highScore, setHighScore] = useState(() => readHighScore(state.level));

  useEffect(() => {
    setHighScore(readHighScore(state.level));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.level]);

  useEffect(() => {
    const isGameOver = state.status === actions.LOST || state.status === actions.WON;
    if (isGameOver && state.score > highScore) {
      setHighScore(state.score);
      localStorage.setItem(`${state.level}HighestScore`, state.score);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status, state.level, state.score]);

  return { highScore };
};

export default useScore;
