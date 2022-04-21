import { useEffect, useState } from "react";
import { Main, Button, Content } from "./styles";
import { PLAY } from "navigation/routes";
import { Link } from "react-router-dom";
import { Board, Header, Loader, SelectLevel } from "components";
import { FaPlay } from "react-icons/fa";

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [loading]);

  if (loading) {
    return (
      <Main>
        <Header />
        <Loader />
      </Main>
    );
  }
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
