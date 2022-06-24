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
  padding: 64px 64px 0 64px;
  position: relative;

  @media only screen and (max-width: 768px) {
    padding: 24px;
    //align-items: center;
    //justify-content: center;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    height: 1.5rem;
  }

  .page-name {
    display: flex;
    align-items: flex-end;
  }

  .title {
    font-weight: 600;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
    }
  }

  .content-menu {
    padding: 2rem 0;

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .content-content {
    display: flex;
    height: 100%;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .content-area {
    /* height: 100%; */
    width: 100%;
  }

  .logo {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 30px;
    top: -20px;
    z-index: 5;
  }

  #nav-icon3 {
    width: 40px;
    height: 32px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: #000;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 11px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 22px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;

const MobileTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  height: 64px;
  display: flex;
  align-items: center;
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
  const { state } = useSelector((state) => state.nav.navState);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useLocation();
  const [imageData, setImageData] = useState([]);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const mobileMenu = useRef(null);
  const [browserWidth, setBrowserWidth] = useState(0);

  const handleResize = () => {
    setBrowserWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    async function getImage() {
      await axios
        .get(`${localUrl}posts/`)
        .then((response) => {
          // 성공 핸들링
          // console.log('response', response);
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [browserWidth]);

  useEffect(() => {
    return history.listen((location) => {
      // console.log(location);
      // if (location.pathname === '/main') {
      //   dispatch('');
      // } else
      if (history.action === 'POP') {
        dispatch(getActions(state)());
      }
    });
  }, [history]);

  const onClose = () => {
    setMobileMenuIsOpen(false);
    mobileMenu.current.classList.contains('open') &&
      mobileMenu.current.classList.remove('open');
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
      <MobileMenu>
        <div
          ref={mobileMenu}
          className="menu btn12"
          data-menu="12"
          id="nav-icon3"
          onClick={(e) => {
            e.preventDefault();
            if (mobileMenuIsOpen) {
              e.currentTarget.classList.remove('open');
              setMobileMenuIsOpen(false);
            } else {
              e.currentTarget.classList.add('open');
              setMobileMenuIsOpen(true);
            }
          }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </MobileMenu>
      {/*<MobileTitle>{params.pathname.split('/')[2].toUpperCase()}</MobileTitle>*/}
      {/*<MobileTitle>{state}</MobileTitle>*/}
      {mobileMenuIsOpen && browserWidth <= 768 && (
        <MobileNav onClose={onClose} width={browserWidth}></MobileNav>
      )}
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
              exact
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
