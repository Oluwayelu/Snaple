import { Fragment, useContext } from "react";
import { GameContext } from "context";
import { SelectLevel } from "components";
import {
  Main,
  Card,
  Content,
  Background,
  CardHeader,
  CardBody,
  Congrats,
  Button,
  Level,
} from "./styles";
import useScore from "hooks/useScore";
import Confetti from "react-confetti";
import { CardFooter } from "./styles";
import { useHistory } from "react-router-dom";
import { START } from "navigation/routes";

const Modal = () => {
  const history = useHistory();
  const { highScore } = useScore();
  const { state, dispatch, actions } = useContext(GameContext);
  const won = state.status === actions.WON;
  const isNewHighScore = state.score >= highScore && state.score > 0;

  return (
    <Main>
      <Background />
      {(won || isNewHighScore) && (
        <Fragment>
          <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={won ? 400 : 200} />
          <Congrats>
            <p>{won ? "You filled the board! You Win!" : "New High Score!"}</p>
          </Congrats>
        </Fragment>
      )}

      <Card>
        <CardHeader won={won}>
          {won ? "Victory!" : "Game Over"}
          <Level>{state.level}</Level>
        </CardHeader>
        <CardBody>
          <Content justify="between">
            <div>Your Score: {state.score}</div>
            <div>Best: {highScore}</div>
          </Content>

          <SelectLevel />
        </CardBody>
        <CardFooter>
          <Button
            color="#39ff88"
            onClick={() => {
              dispatch({ type: actions.RESET_GAME });
            }}
          >
            Play Again
          </Button>
          <Button
            color="#ff5d5d"
            onClick={() => {
              dispatch({ type: actions.RESET_GAME });
              history.push(START);
            }}
          >
            Home
          </Button>
        </CardFooter>
      </Card>
    </Main>
  );
};

export default Modal;
