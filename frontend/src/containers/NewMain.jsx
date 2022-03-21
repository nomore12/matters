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
import { herokuUrl, localUrl } from '../constant/urls';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem;

  .header {
    display: flex;
    justify-content: flex-end;
    height: 1.5rem;
  }

  .page-name {
    display: flex;
    align-items: flex-end;
  }

  @media only screen and (max-width: 768px) {
    //padding: 0 1em;
    //grid-template-columns: 1fr 64px;
    //grid-template-rows: 148px 1fr;
  }

  .title {
    font-weight: 600;
    //width: 720px;
    //margin-top: 1rem;
    //height: 2rem;
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
  }

  .content {
    display: flex;
    width: 100%;
    //margin-top: 4rem;
    justify-content: space-between;
    //align-items: flex-start;
  }

  .content-menu {
    //margin-top: 2rem;
    padding: 2rem 0;
  }

  .content-content {
    //justify-self: flex-end;
    display: flex;
    //justify-content: flex-end;
  }

  .content-area {
    //overflow: initial !important;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  //height: 100%;
  align-items: flex-end;
`;

const LogoComp = styled(Logo)`
  width: 148px;
  height: 108px;
  display: flex;
`;

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
  // const [currentNav, setCurrentNav] = useState('');
  // const [navVisible, setNavVisible] = useState(false);
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
        .get(`${localUrl}posts/`)
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

  // useEffect(() => {
  //   const pathnameArr = params.pathname.split('/');
  //   console.log(params);
  //   setCurrentNav(pathnameArr[2]);
  //   if (pathnameArr.length === 2) {
  //     setNavVisible(false);
  //   } else {
  //     setNavVisible(true);
  //   }
  // }, [params.pathname]);

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

  return (
    <Container>
      <div className="logo">
        <LogoWrapper>
          <Link to="/main">
            <LogoComp />
          </Link>
        </LogoWrapper>
        {/*<div className="header">*/}
        {/*  <div className="page-name">{state}</div>*/}
        {/*</div>*/}
        <div className="navigation">
          {params.pathname === '/main' && <Navigation />}
        </div>
      </div>
      <div className="content">
        <div className="content-menu">
          {params.pathname === '/main/project' && <Menu />}
        </div>
        <div className="content-content">
          {params.pathname !== '/main' && (
            <div className="title">
              {params.pathname.split('/')[2].toUpperCase()}
            </div>
          )}
          <div className="content-area">
            <Switch>
              <Route path="/main/about" component={About} />
              <Route
                exact
                path="/main/project"
                component={() => <Content imgData={imageData} />}
              />
              <Route path="/main/project/:id" component={Detail} />
              <Route path="/main/contact" component={Contact} />
              <Route path="/main/matters" component={Matters} />
            </Switch>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GridMain;
