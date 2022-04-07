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
import { herokuUrl } from '../constant/urls';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 64px 64px 0 64px;

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
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    justify-content: space-between;
  }

  .content-menu {
    padding: 2rem 0;
  }

  .content-content {
    display: flex;
    height: calc(100% - 108px);
  }

  .content-area {
    /* height: 100%; */
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

const NewMain = () => {
  const [panelOn, setPanel] = useState(false);
  const [isClose, setClose] = useState(false);
  const { state } = useSelector((state) => state.nav.navState);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useLocation();
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    async function getImage() {
      await axios
        .get(`${herokuUrl}posts/`)
        .then((response) => {
          // 성공 핸들링
          console.log('response', response);
          setImageData(response.data);
        })
        .catch((error) => {
          // 에러 핸들링
          console.log(
            'erros',
            Object.keys(error),
            error.request,
            error.response,
            error.isAxiosError,
            error.toJSON
          );
        })
        .then(() => {
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
    <Container className="main">
      <div className="logo">
        <LogoWrapper>
          <Link to="/main">
            <LogoComp />
          </Link>
        </LogoWrapper>
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

export default NewMain;
