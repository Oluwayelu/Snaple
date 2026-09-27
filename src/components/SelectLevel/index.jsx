import { useContext } from "react";
import { GameContext } from "context";
import { Button, Content, Main, Title, Description } from "./styles";
import { levelOptions, getLevel } from "utils";

const SelectLevel = () => {
  const { state, dispatch, actions } = useContext(GameContext);
  const activeLevel = getLevel(state.level);

  return (
    <Main>
      <Title>Choose Level</Title>
      <Content>
        {levelOptions.map((level) => (
          <Button
            key={level.name}
            active={state.level === level.name}
            color={level.color}
            onClick={() =>
              dispatch({ type: actions.CHANGE_LEVEL, payload: level })
            }
          >
            {level.name}
          </Button>
        ))}
      </Content>
      <Description>{activeLevel.description}</Description>
    </Main>
  );
};

export default SelectLevel;
