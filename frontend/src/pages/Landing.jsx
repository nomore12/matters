import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from 'static/images/logo.svg';
import styled from 'styled-components';
import Fade from '@mui/material/Fade';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LogoComp = styled(Logo)`
  /* position: absolute;
  left: 500px;
  top: 500px; */
`;

function Landing() {
  const [fade, setFade] = useState();

  useEffect(() => {
    setFade(true);
    return () => setFade(false);
  }, [])

  return <Container>
      <Fade in={fade} easing={{enter: 'ease-in'}} timeout={3000}>
        <Link to="/home">
          <LogoComp height="160" />
        </Link>
      </Fade>
  </Container>
}

export default Landing;