import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import { Navigation, Content, Menu, MenuTitle } from 'components';
import { About, Contact, Matters, Detail } from 'pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 148px 1fr 720px;
  grid-template-rows: 148px 1fr;
  grid-auto-rows: fit-content();
  padding: 4em;
  gap: 1em;

  @media only screen and (max-width: 768px) {
    padding: 0 1em;
    grid-template-columns: 1fr;
    grid-template-rows: 148px 1fr;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 64px;
  }
`;

const LogoComp = styled(Logo)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const NavWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const GridBlock = styled.div`
  display: grid;
  justify-items: flex-end;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.hide ? 'none' : 'grid')};
    justify-items: flex-start;
  }
`;

const HEADER_HEIGHT = 136;

function getActions(curr) {
  switch (curr) {
    case 'ABOUT':
      return navSlice.actions.about;
    case 'PROJECT':
      return navSlice.actions.project;
    case 'CONTACT':
      return navSlice.actions.contact;
    case 'MATTERS':
      return navSlice.actions.matters;
    default:
      return navSlice.actions.landing;
  }
}

const GridMain = () => {
  const [isProject, setProject] = useState(false);
  const { state } = useSelector((state) => state.nav.navState);
  const contRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      console.log(location);
      if (history.action === 'POP') {
        dispatch(getActions(state)());
      }
    });
  }, [history]);
  return (
    <Container>
      <GridBlock>
        <LogoWrapper to={'/main'}>
          <LogoComp />
        </LogoWrapper>
      </GridBlock>
      <GridBlock hide={true}></GridBlock>
      <GridBlock hide={true}>
        <NavWrapper>
          <Navigation />
        </NavWrapper>
      </GridBlock>
      <GridBlock hide={true}>
        <Route exact path="/main/project" component={Menu} />
      </GridBlock>
      <GridBlock hide>
        <MenuTitle></MenuTitle>
      </GridBlock>
      <GridBlock>
        <Switch>
          <Route path="/main/about" component={About} />
          <Route exact path="/main/project" component={Content} />
          <Route path="/main/project/:id" component={Detail} />
          <Route path="/main/contact" component={Contact} />
          <Route path="/main/matters" component={Matters} />
        </Switch>
      </GridBlock>
    </Container>
  );
};

export default GridMain;
