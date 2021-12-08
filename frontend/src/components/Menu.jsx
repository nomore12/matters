import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';

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

  /* &:active {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  } */
`;

const Menu = () => {
  const state = useSelector((store) => store.nav);
  const dispatch = useDispatch();
  const [currentMenu, setCurrentMenu] = useState(state.category);

  const onButtonClick = (curr) => {
    dispatch(navSlice.actions.setCategory(curr));
    setCurrentMenu(curr);
  };

  return (
    <Container>
      {state.navState === 'PROJECT' && (
        <MenuList>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'all' ? '0px 4px 8px rgba(0, 0, 0, 0.5)' : null
              }
              onClick={() => onButtonClick('all')}>
              all
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'first'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('first')}>
              first
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'second'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('second')}>
              second
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'third'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('third')}>
              third
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'fourth'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('fourth')}>
              fourth
            </MenuButton>
          </MenuListItem>
        </MenuList>
      )}
    </Container>
  );
};

export default Menu;
