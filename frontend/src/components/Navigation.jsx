import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { About, Project, Contact, Matters } from 'pages';
import { navSlice } from 'feature/navSlice';
import { useDispatch } from 'react-redux';
import { landing, about, project, contact, matters } from 'feature/navSlice';

const NaveWrapper = styled.div`
  height: 100%;
  width: 640px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > button {
    /* margin-left: 40px; */
  }
`;

function Navigation() {
  const dispatch = useDispatch();

  return (
    <NaveWrapper>
      <Link onClick={() => dispatch(about())} to="/main/about">
        ABOUT
      </Link>
      <Link onClick={() => dispatch(project())} to="/main/project">
        PROJ`ECT
      </Link>
      <Link onClick={() => dispatch(contact())} to="/main/contact">
        CONTACT
      </Link>
      <Link onClick={() => dispatch(matters())} to="/main/matters">
        MATTERS
      </Link>
    </NaveWrapper>
  );
}

export default Navigation;
