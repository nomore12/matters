import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { Detail } from 'pages';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { herokuUrl, localUrl } from '../constant/urls';

const Container = styled(PerfectScrollbar)`
  width: 640px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  grid-template-rows: repeat(auto-fill, 164px);
  grid-gap: 2rem;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
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

const Content = ({ imgData }) => {
  const state = useSelector((store) => store.nav);
  const dispatch = useDispatch();

  const detailClick = (index) => {
    console.log(index);
    return `/images/example/${index + 1}.jpeg`;
  };

  useEffect(() => {
    console.log('content page', imgData);
  }, []);

  return (
    <Container>
      {imgData
        .filter(
          (item) =>
            (state.category === 'all' ||
              state.category === item.fields.post_type) &&
            item
        )
        .map((item, index) => {
          console.log(item);
          return (
            <Link
              key={index}
              to={{
                pathname: `/main/project/${item.pk}`,
                pk: item.pk,
                state: {
                  pk: item.pk,
                  data: item,
                },
              }}>
              {/* <ImgWrapper> */}
              <ImageItem
                src={`${localUrl}media/${item.fields.thumbnail}`}
                alt={item.fields.title}
                title={item.fields.title}
              />
              {/* </ImgWrapper> */}
            </Link>
          );
        })}
    </Container>
  );
};

export default Content;
