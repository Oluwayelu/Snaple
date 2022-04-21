import { directions, initApple, initSnake } from "utils";
import { OUT_OF_BOUNDS, EAT_APPLE, EAT_SELF, MOVE } from "./types";

export function getNextAction(state) {
  const [snakeRow, snakeCol] = state.snake[state.snake.length - 1];
  const [rowMod, colMod] = directions[state.directionCode];

  const newRow = snakeRow + rowMod;
  const newCol = snakeCol + colMod;

  console.log({ action: state.status });

  if (
    newRow < 0 ||
    newRow >= state.board.length ||
    newCol < 0 ||
    newCol >= state.board[0].length ||
    state.board[newRow][newCol] === 3
  ) {
    return OUT_OF_BOUNDS;
  }

  // apple may be undefined between renders
  // short circuit catches type errors
  const apple = state.apple || [null, null];

  if (newRow === apple[0] && newCol === apple[1]) {
    return EAT_APPLE;
  }

  if (
    state.snake.some(
      ([currSnakeRow, currSnakeCol]) =>
        currSnakeRow === newRow && currSnakeCol === newCol
    )
  ) {
    return EAT_SELF;
  }

  return MOVE;
}

export function chooseApple(state) {
  let newAppleRow = Math.floor(Math.random() * state.board.length);
  let newAppleCol = Math.floor(Math.random() * state.board[0].length);

  while (
    // eslint-disable-next-line no-loop-func
    state.snake.some(([row, col]) => newAppleRow === row && newAppleCol === col)
  ) {
    newAppleRow = Math.floor(Math.random() * state.board.length);
    newAppleCol = Math.floor(Math.random() * state.board[0].length);
  }

  while (
    // eslint-disable-next-line no-loop-func
    state.block.some(([row, col]) => newAppleRow === row && newAppleCol === col)
  ) {
    newAppleRow = Math.floor(Math.random() * state.board.length);
    newAppleCol = Math.floor(Math.random() * state.board[0].length);
  }

  return [newAppleRow, newAppleCol];
}

export function getNewBoard(apple = initApple, snake = initSnake, block = []) {
  return new Array(30).fill(null).map((_, rowIdx) =>
    new Array(30).fill(0).map((_, colIdx) => {
      const [appleRow, appleCol] = apple;
      const isApple = appleRow === rowIdx && appleCol === colIdx;
      const isSnake = snake.some(
        ([snakeRow, snakeCol]) => snakeRow === rowIdx && snakeCol === colIdx
      );
      const isBlock = block.some(
        ([blockRow, blockCol]) => blockRow === rowIdx && blockCol === colIdx
      );

      switch (true) {
        case isSnake:
          return 1;
        case isApple:
          return 2;
        case isBlock:
          return 3;
        default:
          return 0;
      }
    })
  );
}
