import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { About, Project, Contact, Matters } from 'pages';
import { navSlice } from 'feature/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import { landing, about, project, contact, matters } from 'feature/navSlice';

const NaveWrapper = styled.div`
  height: 100%;
  width: 640px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

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

const blinker = keyframes`
  0% {
    opacity: 0;
    font: bold;
  }
`;

const BlinkText = styled.span`
  animation: ${blinker} 3s linear;
`;

function Navigation() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.nav.navState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <NaveWrapper display={state === '' ? 'flex' : 'none'}>
        <Link onClick={() => dispatch(about())} to="/main/about">
          <BlinkText>ABOUT</BlinkText>
        </Link>
        <Link onClick={() => dispatch(project())} to="/main/project">
          PROJECT
        </Link>
        <Link onClick={() => dispatch(contact())} to="/main/contact">
          CONTACT
        </Link>
        <Link onClick={() => dispatch(matters())} to="/main/matters">
          MATTERS
        </Link>
      </NaveWrapper>
    </>
  );
}

export default Navigation;
