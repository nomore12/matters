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
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CustomScroll from 'react-custom-scroll';

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
  //width: 720px;
  height: 100%;
  display: block;
  position: relative;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 60px;
  }

  //.scroll-bar {
  //  //height: calc(100% - 64px);
  //  height: 100%;
  //  border: 1px solid black;
  //  display: flex;
  //  flex-wrap: wrap;
  //  gap: 160px;
  //  overflow-y: auto;
  //}
`;

const ScrollBarWrapper = styled(PerfectScrollbar)`
  //width: 640px;
  width: 600px;
  //height: 100%;
  //height: calc(100% - 10px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  grid-template-rows: repeat(auto-fill, 204px);
  grid-gap: 2rem;
  justify-content: space-between;
  padding-bottom: 24px;
  overflow-y: auto;
  //padding-right: 12px;
  //border: 1px solid blue;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    padding: 0 6px;
    grid-gap: 1rem;
    margin-top: 20px;
    //grid-template-columns: repeat(auto-fill, 100%);
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

// const LinkWrapper = styled(Link)`
//   width: 200px;
//   //height: 164px !important;
// `;

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

const LinkWrapper = styled(Link)`
  //width: ;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 204px;
  width: 164px;
  //width: 100%;
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
  const [contentData, setContentData] = useState([]);
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
    // const data = imgData.sort((prev, next) => prev.pk > next.pk);
    // setContentData(data);
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
          })
          .sort((prev, next) => (prev > next ? 1 : -1))}
      </ScrollBarWrapper>
    </ContainerStyle>
  );
};

export default Content;
