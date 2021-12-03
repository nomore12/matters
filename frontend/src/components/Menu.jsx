import React, { useEffect } from 'react';
import styled from 'styled-components';
import { configureStore } from 'store/Store';
import { useSelector } from 'react-redux';

const Container = styled.aside`
  width: 256px;
`;

const Menu = () => {
  const store = useSelector((store) => store.nav.navState);
  useEffect(() => {
    console.log(store);
  });

  return (
    <Container>
      {store === 'project' && (
        <ul>
          <li>menu 1</li>
          <li>menu 1</li>
          <li>menu 1</li>
          <li>menu 1</li>
          <li>menu 1</li>
          <li>menu 1</li>
          <li>menu 1</li>
        </ul>
      )}
    </Container>
  );
};

export default Menu;
