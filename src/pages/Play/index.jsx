import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "context";
import { getNextAction } from "_actions";
import { KEY_TO_DIRECTION } from "utils";
import { Main, GameSection, Section, Overlay, OverlayCard } from "./styles";
import { Board, GamePad, Header, Modal } from "components";

const CONTROL_KEYS = new Set([
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "a",
  "w",
  "d",
  "s",
  " ",
]);

function Play() {
  const { state, dispatch, actions } = useContext(GameContext);
  const stateRef = useRef(state);
  stateRef.current = state;
  const touchStart = useRef(null);

  useEffect(() => {
    function keydownListener(e) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (!CONTROL_KEYS.has(key)) return;
      e.preventDefault();

      if (key === " ") {
        stateRef.current.status === actions.PLAYING
          ? dispatch({ type: actions.PAUSE_GAME })
          : stateRef.current.status === actions.LOST || stateRef.current.status === actions.WON
          ? dispatch({ type: actions.RESET_GAME })
          : dispatch({ type: actions.START_GAME });
        return;
      }

      dispatch({ type: actions.CHANGE_DIRECTION, payload: KEY_TO_DIRECTION[key] });
    }

    document.addEventListener("keydown", keydownListener);
    return () => document.removeEventListener("keydown", keydownListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // game tick — only re-armed when play/pause status or speed changes,
  // so queuing a direction never resets the interval
  useEffect(() => {
    if (state.status !== actions.PLAYING) return;

    const id = setInterval(() => {
      dispatch({ type: getNextAction(stateRef.current) });
    }, state.speed);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status, state.speed]);

  function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(e) {
    if (!touchStart.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;

    const payload =
      Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 39 : 37) : dy > 0 ? 40 : 38;

    dispatch({ type: actions.CHANGE_DIRECTION, payload });
  }

  const isOver = state.status === actions.LOST || state.status === actions.WON;

  return (
    <Main>
      <Header />
      {isOver && <Modal />}

      <GameSection onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <Section justify="end">
          <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
            <Board />
            {!isOver && state.status !== actions.PLAYING && (
              <Overlay>
                <OverlayCard
                  onClick={() => dispatch({ type: actions.START_GAME })}
                >
                  {state.status === actions.PAUSE ? "Paused — tap to resume" : "Tap or press Space to start"}
                </OverlayCard>
              </Overlay>
            )}
          </div>
        </Section>
        <Section direction="col" mt="20">
          <GamePad />
        </Section>
      </GameSection>
    </Main>
  );
}

export default Play;
