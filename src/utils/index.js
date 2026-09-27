export const BOARD_SIZE = 30;

export const directions = {
  37: [0, -1], // left
  38: [-1, 0], // up
  39: [0, 1], // right
  40: [1, 0], // down
};

// Arrow keys + WASD both resolve to the same direction codes.
export const KEY_TO_DIRECTION = {
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  a: 37,
  w: 38,
  d: 39,
  s: 40,
};

export const initApple = [12, 20];

export const initSnake = [
  [9, 5],
  [9, 6],
  [9, 7],
];

export const randomInitSnake = () => {
  const snakeHeadRow = Math.floor(Math.random() * BOARD_SIZE);
  const snakeHeadCol = Math.floor(Math.random() * (BOARD_SIZE - 2));

  return [
    [snakeHeadRow, snakeHeadCol],
    [snakeHeadRow, snakeHeadCol + 1],
    [snakeHeadRow, snakeHeadCol + 2],
  ];
};

const hLine = (row, colStart, colEnd, skip = []) => {
  const cells = [];
  for (let c = colStart; c <= colEnd; c++) {
    if (!skip.includes(c)) cells.push([row, c]);
  }
  return cells;
};

const vLine = (col, rowStart, rowEnd, skip = []) => {
  const cells = [];
  for (let r = rowStart; r <= rowEnd; r++) {
    if (!skip.includes(r)) cells.push([r, col]);
  }
  return cells;
};

const corners = () => [
  ...hLine(14, 0, 9),
  ...hLine(15, 0, 9),
  ...vLine(14, 0, 9),
  ...vLine(15, 0, 9),
  ...hLine(14, 20, 29),
  ...hLine(15, 20, 29),
  ...vLine(14, 20, 29),
  ...vLine(15, 20, 29),
];

const pillars = () => [
  ...vLine(15, 1, 8),
  ...vLine(15, 21, 28),
  ...hLine(15, 1, 8),
  ...hLine(15, 21, 28),
];

// hollow room in the center with two-cell doorways on every side
const chamber = () => [
  ...hLine(10, 10, 19, [14, 15]),
  ...hLine(19, 10, 19, [14, 15]),
  ...vLine(10, 10, 19, [14, 15]),
  ...vLine(19, 10, 19, [14, 15]),
];

const pinwheel = () => [
  ...hLine(6, 3, 14),
  ...vLine(14, 6, 14),
  ...hLine(23, 15, 26),
  ...vLine(15, 15, 23),
  ...hLine(6, 15, 26),
  ...vLine(26, 6, 14),
  ...hLine(23, 3, 14),
  ...vLine(3, 15, 23),
];

export const levelOptions = [
  {
    name: "Easy",
    color: "#39ff88",
    speed: 170,
    description: "Open field — learn the ropes.",
    block: [],
  },
  {
    name: "Medium",
    color: "#ffd23f",
    speed: 150,
    description: "Watch the corner walls.",
    block: corners(),
  },
  {
    name: "Hard",
    color: "#ff8a3d",
    speed: 130,
    description: "Pillars split the board in two.",
    block: pillars(),
  },
  {
    name: "Expert",
    color: "#ff5d5d",
    speed: 110,
    description: "Slip through the chamber gaps.",
    block: chamber(),
  },
  {
    name: "Insane",
    color: "#c86bff",
    speed: 90,
    description: "Pinwheel maze — no room for error.",
    block: pinwheel(),
  },
];

export const getLevel = (name) =>
  levelOptions.find((level) => level.name === name) || levelOptions[0];
