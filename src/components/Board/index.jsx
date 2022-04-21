import { useContext } from "react";
import { GameContext } from "context";
import { Board, Column, Row } from "./styles";

const BoardComponent = ({ sm }) => {
  const { state } = useContext(GameContext);

  return (
    <Board sm={sm}>
      {state.board.map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((_, colIdx) => {
            const isSnake = state.board[rowIdx][colIdx] === 1;
            const isApple = state.board[rowIdx][colIdx] === 2;
            const isBlock = state.board[rowIdx][colIdx] === 3;

            const [snakeHeadRow, snakeHeadCol] =
              state.snake[state.snake.length - 1];
            const snakeHead =
              snakeHeadRow === rowIdx && snakeHeadCol === colIdx;

            return (
              <Column
                key={colIdx}
                snakeHead={snakeHead}
                isSnake={isSnake}
                isApple={isApple}
                isBlock={isBlock}
              />
            );
          })}
        </Row>
      ))}
    </Board>
  );
};

export default BoardComponent;
