import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.aside`
  width: 256px;
  display: flex;
  flex-direction: row-reverse;
`;

const MenuTitle = () => {
  const state = useSelector((store) => store.nav.navState);

  useEffect(() => {
    console.log('title', state);
  }, [state]);

  return <Container>{state === '' ? null : state}</Container>;
};

export default MenuTitle;
