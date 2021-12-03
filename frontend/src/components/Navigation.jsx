import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { About, Project, Contact, Matters } from 'pages';

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

function Navigation(props) {
  return (
    <NaveWrapper>
      <Link to="/main/about" onClick={() => props.onClick('about')}>
        ABOUT
      </Link>
      <Link to="/main/project" onClick={() => props.onClick('project')}>
        PROJECT
      </Link>
      <Link to="/main/contact" onClick={() => props.onClick('contact')}>
        CONTACT
      </Link>
      <Link to="/main/matters" onClick={() => props.onClick('matters')}>
        MATTERS
      </Link>
    </NaveWrapper>
  );
}

export default Navigation;
