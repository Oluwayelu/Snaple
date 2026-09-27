import { BOARD_SIZE, directions } from "utils";
import { OUT_OF_BOUNDS, EAT_APPLE, EAT_SELF, MOVE } from "./types";

function hitsBlock(block, row, col) {
  for (let i = 0; i < block.length; i++) {
    if (block[i][0] === row && block[i][1] === col) return true;
  }
  return false;
}

export function getNextAction(state) {
  const [snakeRow, snakeCol] = state.snake[state.snake.length - 1];
  const [rowMod, colMod] = directions[state.queuedDirectionCode];

  const newRow = snakeRow + rowMod;
  const newCol = snakeCol + colMod;

  if (
    newRow < 0 ||
    newRow >= BOARD_SIZE ||
    newCol < 0 ||
    newCol >= BOARD_SIZE ||
    hitsBlock(state.block, newRow, newCol)
  ) {
    return OUT_OF_BOUNDS;
  }

  const apple = state.apple || [null, null];
  if (newRow === apple[0] && newCol === apple[1]) {
    return EAT_APPLE;
  }

  // the tail (index 0) vacates this same tick, so moving into it is legal
  const body = state.snake.slice(1);
  if (body.some(([r, c]) => r === newRow && c === newCol)) {
    return EAT_SELF;
  }

  return MOVE;
}

// returns null when there is no free cell left on the board (a win)
export function chooseApple(state) {
  const occupied = new Set([
    ...state.snake.map(([r, c]) => `${r},${c}`),
    ...state.block.map(([r, c]) => `${r},${c}`),
  ]);

  if (occupied.size >= BOARD_SIZE * BOARD_SIZE) return null;

  let row, col, key;
  let attempts = 0;
  do {
    row = Math.floor(Math.random() * BOARD_SIZE);
    col = Math.floor(Math.random() * BOARD_SIZE);
    key = `${row},${col}`;
    attempts++;
  } while (occupied.has(key) && attempts < 200);

  if (occupied.has(key)) {
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (!occupied.has(`${r},${c}`)) return [r, c];
      }
    }
  }

  return [row, col];
}
