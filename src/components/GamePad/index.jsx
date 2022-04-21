import { useContext } from "react";
import { GameContext } from "context";
import { Pad, Button, Section } from "./styles";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
  FaPlay,
  FaPause,
} from "react-icons/fa";
const GamePad = () => {
  const { state, dispatch, actions } = useContext(GameContext);
  return (
    <Pad>
      <Section>
        <Button
          top
          onClick={() => {
            dispatch({ type: actions.CHANGE_DIRECTION, payload: 38 });
          }}
        >
          <FaAngleUp size={24} />
        </Button>
      </Section>
      <Section>
        <Button
          onClick={() => {
            dispatch({ type: actions.CHANGE_DIRECTION, payload: 37 });
          }}
        >
          <FaAngleLeft size={24} />
        </Button>
        {state.status === actions.PLAYING ? (
          <Button
            center
            onClick={() => {
              dispatch({ type: actions.PAUSE_GAME });
            }}
          >
            <FaPause />
          </Button>
        ) : (
          <Button
            center
            onClick={() => {
              if (state.status === actions.LOST) {
                dispatch({ type: actions.RESET_GAME });
              } else {
                dispatch({ type: actions.START_GAME });
              }
            }}
          >
            <FaPlay />
          </Button>
        )}
        <Button
          onClick={() => {
            dispatch({ type: actions.CHANGE_DIRECTION, payload: 39 });
          }}
        >
          <FaAngleRight size={24} />
        </Button>
      </Section>
      <Section>
        <Button
          onClick={() => {
            dispatch({ type: actions.CHANGE_DIRECTION, payload: 40 });
          }}
        >
          <FaAngleDown size={24} />
        </Button>
      </Section>
    </Pad>
  );
};

export default GamePad;
