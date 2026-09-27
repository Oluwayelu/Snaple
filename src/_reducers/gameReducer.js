import { directions, initApple, initSnake, levelOptions } from "utils";
import { chooseApple } from "_actions";
import * as actions from "_actions/types";

const defaultLevel = levelOptions[0];

export const initState = {
  directionCode: 39,
  queuedDirectionCode: 39,
  apple: [...initApple],
  snake: [...initSnake],
  block: defaultLevel.block,
  status: actions.PREGAME,
  level: defaultLevel.name,
  speed: defaultLevel.speed,
  baseSpeed: defaultLevel.speed,
  score: 0,
  countApple: 0,
};

function gameReducer(state, { type, payload }) {
  switch (type) {
    case actions.CHANGE_DIRECTION:
      // ignore reversing straight into the segment behind the head
      if (Math.abs(state.directionCode - payload) === 2) return state;
      return { ...state, queuedDirectionCode: payload };

    case actions.CHANGE_SPEED:
      return { ...state, speed: payload };

    case actions.CHANGE_LEVEL:
      return {
        ...initState,
        block: payload.block,
        level: payload.name,
        speed: payload.speed,
        baseSpeed: payload.speed,
      };

    case actions.MOVE: {
      const [headRow, headCol] = state.snake[state.snake.length - 1];
      const [rowMod, colMod] = directions[state.queuedDirectionCode];
      const newHead = [headRow + rowMod, headCol + colMod];
      const newSnake = [...state.snake.slice(1), newHead];

      return {
        ...state,
        snake: newSnake,
        directionCode: state.queuedDirectionCode,
      };
    }

    case actions.EAT_APPLE: {
      const [headRow, headCol] = state.snake[state.snake.length - 1];
      const [rowMod, colMod] = directions[state.queuedDirectionCode];
      const newHead = [headRow + rowMod, headCol + colMod];
      const newSnake = [...state.snake, newHead];

      const newApple = chooseApple({ ...state, snake: newSnake });

      if (!newApple) {
        return {
          ...state,
          snake: newSnake,
          apple: null,
          directionCode: state.queuedDirectionCode,
          status: actions.WON,
          score: state.score + 100,
        };
      }

      const nextCountApple = state.countApple + 1;
      const speedBump = nextCountApple % 5 === 0 ? 10 : 0;

      return {
        ...state,
        snake: newSnake,
        apple: newApple,
        directionCode: state.queuedDirectionCode,
        score: state.score + 100,
        countApple: nextCountApple,
        speed: Math.max(50, state.speed - speedBump),
      };
    }

    case actions.OUT_OF_BOUNDS:
      return { ...state, status: actions.LOST };

    case actions.EAT_SELF:
      return { ...state, status: actions.LOST };

    case actions.RESET_GAME:
      return {
        ...initState,
        block: state.block,
        level: state.level,
        speed: state.baseSpeed,
        baseSpeed: state.baseSpeed,
      };

    case actions.START_GAME:
      return { ...state, status: actions.PLAYING };

    case actions.PAUSE_GAME:
      return { ...state, status: actions.PAUSE };

    default:
      return state;
  }
}

export default gameReducer;
