// import { useEffect } from "react";
import { Main, Button, Content } from "./styles";
import { PLAY } from "navigation/routes";
import { Link } from "react-router-dom";
import { Board, Header, SelectLevel } from "components";
import { useHistory } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Welcome = () => {
  const history = useHistory();
  console.log(history.location.pathname);
  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push(PLAY);
  //   }, 10000);
  // }, [history]);
  return (
    <Main>
      <Header />
      <Board sm />
      <Content>
        <SelectLevel />
        <Button color="green">
          <Link to={PLAY}>
            <FaPlay />
          </Link>
        </Button>
      </Content>
    </Main>
  );
};

export default Welcome;
