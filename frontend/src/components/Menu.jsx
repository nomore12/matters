import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { useLocation } from 'react-router-dom';

const Container = styled.aside`
  width: 100%;
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
  font-size: 13px;
  font-weight: 300;
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
  const location = useLocation();

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
                currentMenu === 'residential'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('residential')}>
              residential
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'office'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('office')}>
              office
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'commercial'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('commercial')}>
              commercial
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'hospitality'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('hospitality')}>
              hospitality
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'exhibition'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('exhibition')}>
              exhibition
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'furniture'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('furniture')}>
              furniture
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'unbuilt'
                  ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  : null
              }
              onClick={() => onButtonClick('unbuilt')}>
              unbuilt
            </MenuButton>
          </MenuListItem>
          <MenuListItem>
            <MenuButton
              textShadow={
                currentMenu === 'etc' ? '0px 4px 8px rgba(0, 0, 0, 0.5)' : null
              }
              onClick={() => onButtonClick('etc')}>
              etc
            </MenuButton>
          </MenuListItem>
        </MenuList>
      )}
    </Container>
  );
};

export default Menu;
