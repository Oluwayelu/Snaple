import { Logo } from "components";
import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { GameContext } from "context";
import { Nav, LeftSection, RightSection, ScoreLabel } from "./styles";
import useScore from "hooks/useScore";
import { START } from "navigation/routes";

const Header = () => {
  const history = useHistory();
  const { state } = useContext(GameContext);
  const { highScore } = useScore();

  const welcomePage = history.location.pathname === "/";
  return (
    <Nav center={welcomePage}>
      <LeftSection>
        <Link to={START}>
          <Logo sm={!welcomePage} />
        </Link>
      </LeftSection>
      {!welcomePage && (
        <RightSection>
          <ScoreLabel lead={state.score > highScore}>
            Score: {state.score}
          </ScoreLabel>
          <ScoreLabel>Best: {highScore}</ScoreLabel>
        </RightSection>
      )}
    </Nav>
  );
};

export default Header;
