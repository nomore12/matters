import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import styled from 'styled-components';
import Fade from '@mui/material/Fade';
import { Main } from 'containers/index';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LogoComp = styled(Logo)`
  height: ${(props) => props.height};

  @media only screen and (max-width: 768px) {
    height: 72px;
  }
`;

function Landing() {
  const [fade, setFade] = useState();

  useEffect(() => {
    setFade(true);
    return () => setFade(false);
  }, []);

  return (
    <Container>
      <Fade in={fade} easing={{ enter: 'ease-in' }} timeout={3000}>
        <Link to="/main">
          <LogoComp height="160px" />
        </Link>
      </Fade>
      <>
        <Route exact path="/main" component={Main} />
      </>
    </Container>
  );
}

export default Landing;
