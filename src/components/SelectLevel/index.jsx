import { useContext } from "react";
import { GameContext } from "context";
import { Button, Content, Main, Title } from "./styles";
import { blockOptions } from "utils";

function getLevel(name) {
  return blockOptions.find((obj) => obj.name === name);
}

const SelectLevel = () => {
  const { state, dispatch, actions } = useContext(GameContext);

  return (
    <Main>
      <Title>Choose Level</Title>
      <Content>
        <Button
          active={state.level === "Easy"}
          color="#05fdbf"
          onClick={() =>
            dispatch({
              type: actions.CHANGE_LEVEL,
              payload: getLevel("Easy"),
            })
          }
        >
          Easy
        </Button>
        <Button
          active={state.level === "Medium"}
          color="#f8c726"
          onClick={() =>
            dispatch({
              type: actions.CHANGE_LEVEL,
              payload: getLevel("Medium"),
            })
          }
        >
          Medium
        </Button>
        <Button
          active={state.level === "Hard"}
          color="#fd1589"
          onClick={() =>
            dispatch({
              type: actions.CHANGE_LEVEL,
              payload: getLevel("Hard"),
            })
          }
        >
          Hard
        </Button>
      </Content>
    </Main>
  );
};

export default SelectLevel;
