import { Logo } from "components";
import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { GameContext } from "context";
import { Nav, LeftSection, RightSection } from "./styles";
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
          <p
            style={{
              color: `${state.score > highScore ? "green" : "black"}`,
            }}
          >
            Score: {state.score}
          </p>
          <p>HighScore: {highScore}</p>
        </RightSection>
      )}
    </Nav>
  );
};

export default Header;
