import { directions, initApple, initSnake } from "utils";
import { getNewBoard, chooseApple } from "_actions";
import * as actions from "_actions/types";

export const initState = {
  board: getNewBoard(),
  directionCode: 39,
  apple: [...initApple],
  snake: [...initSnake],
  block: [],
  status: actions.PREGAME,
  gameInterval: null,
  level: "Easy",
  speed: 200,
  score: 0,
  countApple: 0,
};

function gameReducer(state, { type, payload }) {
  switch (type) {
    case actions.CHANGE_DIRECTION:
      // prevent changing direction along same axis, ie left if currently moving right, down if currently moving up
      if (Math.abs(state.directionCode - payload) === 2) return state;
      return { ...state, directionCode: payload };

    case actions.CHANGE_SPEED:
      return { ...state, speed: payload };

    case actions.CHANGE_LEVEL:
      return {
        ...state,
        block: payload.block,
        level: payload.name,
        board: getNewBoard(state.apple, state.snake, payload.block),
      };

    case actions.MOVE: {
      const [headRow, headCol] = state.snake[state.snake.length - 1];
      const [rowMod, colMod] = directions[state.directionCode];
      const newHead = [headRow + rowMod, headCol + colMod];

      const newSnake = [...state.snake.slice(1), newHead];
      const newBoard = getNewBoard(state.apple, newSnake, state.block);

      return { ...state, board: newBoard, snake: newSnake };
    }

    case actions.EAT_APPLE: {
      const head = state.snake[state.snake.length - 1];
      const [rowMod, colMod] = directions[state.directionCode];
      const apple = [head[0] + rowMod, head[1] + colMod];

      const newApple = chooseApple(state);
      const newSnake = [...state.snake, apple];

      return {
        ...state,
        snake: newSnake,
        board: getNewBoard(newApple, newSnake, state.block),
        apple: newApple,
        score: state.score + 100,
        countApple: state.countApple + 1,
        speed:
          state.speed !== 0 &&
          state.countApple > 0 &&
          state.countApple % 5 === 0
            ? state.speed - 20
            : state.speed,
      };
    }

    case actions.OUT_OF_BOUNDS:
      return { ...state, status: actions.LOST };

    case actions.EAT_SELF:
      return { ...state, status: actions.LOST };

    case actions.RESET_GAME:
      return {
        ...initState,
        board: getNewBoard(initApple, initSnake, state.block),
        block: state.block,
        level: state.level,
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
