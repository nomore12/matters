import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import { Navigation, Content, Menu, MenuTitle, MobileNav } from 'components';
import { About, Contact, Matters, Detail } from 'pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
    grid-template-columns: 1fr 64px;
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

const GridBlock = styled.div`
  display: grid;
  justify-items: flex-end;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.hide ? 'none' : 'grid')};
    grid-column: ${(props) => (props.content ? '1 / 3' : '')};
    justify-items: flex-start;
  }
`;

const SecondNav = styled.div`
  width: 64px;
  height: 64px;
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-self: center;
  }
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  z-index: 10;
`;

const NaveLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
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
  const [currentNav, setCurrentNav] = useState('');
  const [navVisible, setNavVisible] = useState(false);
  const [panelOn, setPanel] = useState(false);
  const [isClose, setClose] = useState(false);
  const { state } = useSelector((state) => state.nav.navState);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useLocation();
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // axios.defaults.baseURL = 'http://127.0.0.1:8000/posts';

    async function getImage() {
      await axios
        .get('https://mattersbackend.herokuapp.com/posts/')
        .then(function (response) {
          // 성공 핸들링
          console.log('response', response);
          setImageData(response.data);
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log('erros', error);
        })
        .then(function () {
          // 항상 실행되는 영역
        });
    }
    getImage();
  }, []);

  useEffect(() => {
    const pathnameArr = params.pathname.split('/');
    setCurrentNav(pathnameArr[2]);
    if (pathnameArr.length === 2) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  }, [params.pathname]);

  useEffect(() => {
    return history.listen((location) => {
      console.log(location);
      if (history.action === 'POP') {
        dispatch(getActions(state)());
      }
    });
  }, [history]);

  const onClose = () => {
    setClose(!isClose);
    setPanel(!panelOn);
  };

  // const imageLists = imageData ? imageData.map((data) => {
  //   return (

  //   )
  // })

  return (
    <Container>
      <GridBlock>
        <LogoWrapper to={'/main'}>
          <LogoComp />
        </LogoWrapper>
      </GridBlock>
      <GridBlock hide={true}></GridBlock>
      <GridBlock hide={true}>{!navVisible && <Navigation />}</GridBlock>
      <SecondNav>
        {panelOn && (
          <NaveLayer>
            <MobileNav onClose={onClose}></MobileNav>
          </NaveLayer>
        )}
        <BarWrapper>
          <FontAwesomeIcon
            icon={!isClose ? faBars : faTimes}
            onClick={() => {
              setClose(!isClose);
              setPanel(!panelOn);
            }}
          />
        </BarWrapper>
      </SecondNav>
      <GridBlock hide={true}>
        <Route exact path="/main/project" component={Menu} />
      </GridBlock>
      <GridBlock hide>
        <MenuTitle
          title={currentNav === undefined ? '' : currentNav}></MenuTitle>
      </GridBlock>
      <GridBlock content>
        <Switch>
          <Route path="/main/about" component={About} />
          <Route
            exact
            path="/main/project"
            component={() => <Content imgData={imageData} />}
          />
          <Route path="/main/project/:id" component={Detail} />
          <Route path="/main/contact" component={<Contact />} />
          <Route path="/main/matters" component={Matters} />
        </Switch>
      </GridBlock>
    </Container>
  );
};

export default GridMain;
