import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import styled from 'styled-components';
import Fade from '@mui/material/Fade';
import { Main } from 'containers/index';
import { setCategory } from '../feature/navSlice';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

const LogoComp = styled(Logo)`
  height: ${(props) => props.height};
  margin-left: 80px;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    //padding-left: 24px;
  }
`;

function Landing() {
  const [fade, setFade] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setFade(true);
    return () => setFade(false);
    // dispatch(setCategory('all'));
  }, []);

  return (
    <Container>
      <Fade in={fade} easing={{ enter: 'ease-in' }} timeout={6000}>
        <Link to="/main">
          <LogoComp height="240px" width="240px" />
        </Link>
      </Fade>
      <>
        <Route exact path="/main" component={Main} />
      </>
    </Container>
  );
}

export default Landing;
