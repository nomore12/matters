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

const blinker = ({ start, mid, end }) => keyframes`
  ${start} {
    opacity: 0;
    /* font: bold; */
  }
  ${mid} {
    opacity: 0;
  }
  ${end} {
    opacity: 1;
  }
`;

const LinkWapper = styled(Link)`
  &:visited {
    color: '#fff';
  }
`;

const BlinkText = styled.span`
  animation: ${blinker} 2s linear;
  font-weight: 600;
  color: black;
`;

function Navigation() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.nav.navState);

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <>
      <NaveWrapper display={state === '' ? 'flex' : 'none'}>
        <LinkWapper onClick={() => dispatch(about())} to="/main/about">
          <BlinkText start="0%" mid="0%" end="70%">
            ABOUT
          </BlinkText>
        </LinkWapper>
        <LinkWapper onClick={() => dispatch(project())} to="/main/project">
          <BlinkText start="0%" mid="15%" end="80%">
            PROJECT
          </BlinkText>
        </LinkWapper>
        <LinkWapper onClick={() => dispatch(contact())} to="/main/contact">
          <BlinkText start="0%" mid="35%" end="90%">
            CONTACT
          </BlinkText>
        </LinkWapper>
        <LinkWapper onClick={() => dispatch(matters())} to="/main/matters">
          <BlinkText start="0%" mid="50%" end="100%">
            MATTERS
          </BlinkText>
        </LinkWapper>
      </NaveWrapper>
    </>
  );
}

export default Navigation;
