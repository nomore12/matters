import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  width: 256px;
`;

const MenuList = styled.ul`
  padding: 0;
  & > li {
    margin-bottom: 1rem;
  }
`;

const MenuListItem = styled.li`
  list-style: none;
`;

const MenuButton = styled.button`
  border: none;
  background-color: rgba(1, 1, 1, 0);
  font-size: 1rem;
  text-shadow: ${(props) => props.textShadow};

  &:hover {
    text-shadow: 0px 1px 7px rgba(0, 0, 0, 0.22);
  }

  &:active {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  }
`;

const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuListItem>
          <MenuButton>all</MenuButton>
        </MenuListItem>
        <MenuListItem>
          <MenuButton>menu 1</MenuButton>
        </MenuListItem>
        <MenuListItem>
          <MenuButton>menu 1</MenuButton>
        </MenuListItem>
        <MenuListItem>
          <MenuButton>menu 1</MenuButton>
        </MenuListItem>
        <MenuListItem>
          <MenuButton>menu 1</MenuButton>
        </MenuListItem>
        <MenuListItem>
          <MenuButton>menu 1</MenuButton>
        </MenuListItem>
        <MenuListItem>
          <MenuButton>menu 1</MenuButton>
        </MenuListItem>
      </MenuList>
    </Container>
  );
};

export default Menu;
