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
  return (
    <Main>
      <Background />
      {state.score >= highScore && (
        <Fragment>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <Congrats>
            <p>You Beat HIGHSCORE!!!</p>
          </Congrats>
        </Fragment>
      )}

      <Card>
        <CardHeader>
          Game Over
          <Level>{state.level}</Level>
        </CardHeader>
        <CardBody>
          <Content justify="between">
            <div>Your Scored: {state.score}</div>
            <div>Highest Score: {highScore}</div>
          </Content>

          <SelectLevel />
        </CardBody>
        <CardFooter>
          <Button
            color="green"
            onClick={() => {
              dispatch({ type: actions.RESET_GAME });
            }}
          >
            Play Again
          </Button>
          <Button
            color="red"
            onClick={() => {
              dispatch({ type: actions.RESET_GAME });
              history.push(START)
            }}
          >
            Go back Home
          </Button>
        </CardFooter>
      </Card>
    </Main>
  );
};

export default Modal;
