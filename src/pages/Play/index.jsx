import React, { useContext, useRef, useEffect } from "react";
import {
  Main,
  GameSection,
  Section,
} from "./styles";
// import { getMessage } from "utils";
import { GameContext } from "context";
import { getNextAction } from "_actions";
import {
  Board,
  GamePad,
  Header,
  Modal,
} from "components";

function Play() {
  const gameInterval = useRef(null);
  const { state, dispatch, actions } = useContext(GameContext);

  function keydownListener(e) {
    if (
      !(
        e.keyCode === 32 ||
        e.keyCode === 37 ||
        e.keyCode === 38 ||
        e.keyCode === 39 ||
        e.keyCode === 40
      )
    ) {
      return;
    }
    if (e.keyCode === 32) {
      state.status === actions.PLAYING
        ? dispatch({ type: actions.PAUSE_GAME })
        : dispatch({ type: actions.START_GAME });
    } else {
      dispatch({ type: actions.CHANGE_DIRECTION, payload: e.keyCode });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keydownListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    clearTimeout(gameInterval.current);

    if (state.status === actions.PLAYING) {
      gameInterval.current = setTimeout(() => {
        dispatch({ type: getNextAction(state) });
      }, state.speed);
    }

    if (state.status === actions.PAUSE) {
      clearTimeout(gameInterval.current);
    }
    console.log(state.status);
    console.log(state.level);
    console.log(state.speed);
  });

  // immediately disable gameInterval to allow start press to handle it
  useEffect(() => {
    if (state.status === (actions.PREGAME || actions.LOST || actions.PAUSE)) {
      clearTimeout(gameInterval.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // useEffect(() => {
  //   const currentHighScore = localStorage.getItem(`${state.level}HighestScore`);
  //   if (state.status === actions.LOST && state.score > currentHighScore) {
  //     localStorage.setItem(`${state.level}HighestScore`, state.score);
  //   }
  // }, [state.score]);

  return (
    <Main>
      <Header />
      {state.status === actions.LOST && <Modal />}

      <GameSection>
        <Section justify="end">
          <Board />
        </Section>
        <Section direction="col" mt="20">
          {/* <Controls>
            {state.status === actions.PREGAME && (
              <StartGameBtn
                onClick={() => {
                  dispatch({ type: actions.START_GAME });
                }}
              >
                Start Game
              </StartGameBtn>
            )}
            {state.status !== actions.PREGAME && (
              <ResetGameBtn
                onClick={() => {
                  clearTimeout(gameInterval.current);
                  dispatch({ type: actions.RESET_GAME });
                }}
              >
                Reset Game
              </ResetGameBtn>
            )}
            {state.status === actions.PLAYING && (
              <ResetGameBtn
                onClick={() => {
                  clearTimeout(gameInterval.current);
                  dispatch({ type: actions.PAUSE_GAME });
                }}
              >
                Pause Game
              </ResetGameBtn>
            )}
            {state.status === actions.PAUSE && (
              <ResetGameBtn
                onClick={() => {
                  clearTimeout(gameInterval.current);
                  dispatch({ type: actions.START_GAME });
                }}
              >
                Resume Game
              </ResetGameBtn>
            )}

            {state.status === actions.PREGAME && <SelectBlock />}
          </Controls> */}

          <GamePad />
        </Section>
      </GameSection>
    </Main>
  );
}

export default Play;
