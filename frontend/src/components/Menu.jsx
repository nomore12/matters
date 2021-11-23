import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  width: 256px;
`;

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>menu 1</li>
        <li>menu 1</li>
        <li>menu 1</li>
        <li>menu 1</li>
        <li>menu 1</li>
        <li>menu 1</li>
        <li>menu 1</li>
      </ul>
    </Container>
  )
}

export default Menu;