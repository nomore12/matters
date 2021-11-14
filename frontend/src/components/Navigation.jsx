import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NaveWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > button {
    /* margin-left: 40px; */
  }
`;

function Navigation() {
  return (
    <NaveWrapper>
      <button>ABOUT</button>
      <button>PROJECT</button>
      <button>CONTACT</button>
      <button>MATTERS</button>
    </NaveWrapper>
  )
}

export default Navigation;