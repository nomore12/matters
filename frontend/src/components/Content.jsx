import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice, setCategory } from 'feature/navSlice';
import { Detail } from 'pages';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { herokuUrl, localUrl } from '../constant/urls';
import { getActions } from 'utils/stateUtils';
import Dropdown from './Dropdown';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled as muiStyled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';

const CustomDropdown = muiStyled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
    display: 'none',
  },
  '& .MuiInputBase-input': {
    borderRadius: 3,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #cdd4da',
    fontSize: 14,
    padding: '10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  '&:focus': {
    borderRadius: 4,
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
}));

const ContainerStyle = styled.div`
  width: 720px;
  height: calc(100% - 108px);
  display: block;
  position: relative;
  //border: 1px solid red;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    height: calc(100% - 72px);
    margin-top: 60px;
  }
`;

const ScrollBarWrapper = styled(PerfectScrollbar)`
  width: 640px;
  //height: calc(100% - 10px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  grid-template-rows: repeat(auto-fill, 204px);
  grid-gap: 2rem;
  justify-content: flex-end;
  padding-bottom: 24px;
  padding-right: 12px;
  //border: 1px solid blue;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    padding: 0 6px;
    grid-gap: 1rem;
    margin-top: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

const GrayscaleTransition = keyframes`
  0% {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  100% {
    -webkit-filter: none;
    filter: none;
  }
`;

const LinkWrapper = styled(Link)`
  //height: 164px !important;
`;

const ImageItem = styled.img`
  box-sizing: border-box;
  width: 164px;
  height: 164px;
  object-fit: contain;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    cursor: pointer;
    animation: ${GrayscaleTransition} 1.5s linear;
    animation-fill-mode: forwards;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 204px;
  width: 164px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ItemTitle = styled.p`
  height: 8px;
  position: absolute;
  bottom: 0;
  color: black;
`;

const categories = [
  'all',
  'residential',
  'office',
  'commercial',
  'hospitality',
  'exhibition',
  'furniture',
  'unbuilt',
  'etc',
];

const Content = ({ imgData }) => {
  const state = useSelector((store) => store.nav);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(state.category);
  const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false);
  const ref = useRef(null);
  //
  // const handleResize = () => {
  //   setBrowserWidth(window.innerWidth);
  // };
  //
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   console.log(browserWidth);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [browserWidth]);

  useEffect(() => {
    dispatch(getActions('PROJECT')());
  }, []);

  useEffect(() => {
    setCurrentCategory(state.category);
  }, [state.category, currentCategory]);

  const onMenuClick = (e) => {
    setCategoryMenuIsOpen(!categoryMenuIsOpen);
  };

  const onMenuClose = (e) => {
    setCategoryMenuIsOpen(!categoryMenuIsOpen);
  };

  const selectCategory = (e, category) => {
    onMenuClose(e);
    dispatch(setCategory(category));
    setCurrentCategory(category);
  };

  return (
    <ContainerStyle isOpen={categoryMenuIsOpen}>
      <Dropdown
        value={currentCategory}
        categories={categories}
        onMenuClick={onMenuClick}
        isOpen={categoryMenuIsOpen}
        selectCategory={selectCategory}
      />
      <ScrollBarWrapper>
        {imgData
          .filter((item) => {
            return (
              currentCategory === 'all' ||
              currentCategory === item.fields.post_type
            );
          })
          .map((item, index) => {
            return (
              <LinkWrapper
                key={index}
                to={{
                  pathname: `/main/project/${item.pk}`,
                  pk: item.pk,
                  state: {
                    pk: item.pk,
                    data: item,
                  },
                }}>
                <ItemWrapper>
                  <ImageItem
                    src={`${localUrl}media/${item.fields.thumbnail}`}
                    alt={item.fields.title}
                    title={item.fields.title}
                  />
                  <ItemTitle>{item.fields.title}</ItemTitle>
                </ItemWrapper>
              </LinkWrapper>
            );
          })}
      </ScrollBarWrapper>
    </ContainerStyle>
  );
};

export default Content;
