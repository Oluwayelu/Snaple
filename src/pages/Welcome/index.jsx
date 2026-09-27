import { useEffect, useState } from "react";
import { Main, Button, Content, Tagline } from "./styles";
import { PLAY } from "navigation/routes";
import { Link } from "react-router-dom";
import { Board, Header, Loader, SelectLevel } from "components";
import { FaPlay } from "react-icons/fa";

const Welcome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

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
      <Tagline>Classic snake, reimagined with mazes.</Tagline>
      <Content>
        <SelectLevel />
        <Link to={PLAY} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button color="#39ff88">
            <FaPlay />
            &nbsp;Play
          </Button>
        </Link>
      </Content>
    </Main>
  );
};

export default Welcome;
