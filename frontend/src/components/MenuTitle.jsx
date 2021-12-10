import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.aside`
  width: 256px;
  display: flex;
  flex-direction: row-reverse;

  & h3 {
    margin: 0px;
  }
`;

const MenuTitle = () => {
  const state = useSelector((store) => store.nav.navState);

  useEffect(() => {
    console.log('title', state);
  }, [state]);

  return (
    <Container>
      <h3>{state === '' ? null : state}</h3>
    </Container>
  );
};

export default MenuTitle;
