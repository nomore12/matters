import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import { Navigation, Content, Menu, MenuTitle } from 'components';
import { About, Contact, Matters, Project } from 'pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  padding: 40px 120px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  min-height: ${(props) => (props.height ? props.height : 'auto')};
  max-height: ${(props) => props.maxHeight};
  flex-grow: ${(props) => props.grow};
  justify-content: space-between;
`;

const Block = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-top: ${(props) => props.paddingTop};
  flex-grow: ${(props) => (props.glow ? props.glow : '0')};
  display: flex;
  justify-content: flex-end;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 256px;
`;

const LogoComp = styled(Logo)`
  height: ${(props) => props.height};
  width: 123px;

  @media only screen and (max-width: 768px) {
    height: 72px;
  }
`;

// const ASIDE_WIDTH = 256;
// const CONTENT_WIDTH = 640;
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

function Main() {
  const { state } = useSelector((state) => state.nav.navState);
  const contRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(state);
    return history.listen((location) => {
      console.log(location);
      if (history.action === 'POP') {
        dispatch(getActions(state)());
      }
    });
  }, [history]);

  return (
    <>
      <Container ref={contRef}>
        <Row margin="1rem 0 0 0" height="136px">
          <Block>
            <LogoWrapper>
              <Link
                to="/main"
                onClick={() => dispatch(navSlice.actions.landing())}>
                <LogoComp height={`${86}px`}></LogoComp>
              </Link>
            </LogoWrapper>
          </Block>
          {/* 240 + 256 + 640 */}
          <Block glow={1}></Block>
          <Block>
            <Navigation />
          </Block>
        </Row>
        <Row
          maxHeight={`${
            document.documentElement.offsetHeight - HEADER_HEIGHT - 40
          }px`}>
          <Block paddingTop="40px">
            <Route exact path="/main/project" component={Menu} />
          </Block>
          <Block glow={1} paddingTop="40px">
            <MenuTitle />
          </Block>
          <Block paddingTop="40px">
            <Switch>
              <Route path="/main/about" component={About} />
              <Route path="/main/project" component={Content} />
              <Route path="/main/contact" component={Contact} />
              <Route path="/main/matters" component={Matters} />
            </Switch>
          </Block>
        </Row>
      </Container>
    </>
  );
}

export default Main;
