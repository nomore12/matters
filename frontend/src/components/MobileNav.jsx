import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { About, Project, Contact, Matters } from 'pages';
import { navSlice } from 'feature/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import { landing, about, project, contact, matters } from 'feature/navSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NaveWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & * {
    text-decoration: none;

    &:visited {
      color: black;
    }

    &:focus {
      font-weight: 600;
    }
  }
`;

const ClossWrapper = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  top: 2.5rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const CloseBtn = styled(FontAwesomeIcon)`
  z-index: 10;
`;

function MobileNav(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.nav.navState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <NaveWrapper display={state === '' ? 'flex' : 'none'}>
        <Link
          onClick={() => {
            props.onClose();
            dispatch(about());
          }}
          to="/main/about">
          ABOUT
        </Link>
        <Link
          onClick={() => {
            props.onClose();
            dispatch(project());
          }}
          to="/main/project">
          PROJ`ECT
        </Link>
        <Link
          onClick={() => {
            props.onClose();
            dispatch(contact());
          }}
          to="/main/contact">
          CONTACT
        </Link>
        <Link
          onClick={() => {
            props.onClose();
            dispatch(matters());
          }}
          to="/main/matters">
          MATTERS
        </Link>
      </NaveWrapper>
    </>
  );
}

export default MobileNav;
