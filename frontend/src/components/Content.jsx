import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { Detail } from 'pages';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Container = styled(PerfectScrollbar)`
  //max-width: 640px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 186px);
  //max-height: 100%;
  grid-gap: 1em;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageItem = styled.img`
  box-sizing: border-box;
  width: 164px;
  height: 164px;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  //display: flex;
`;

const Content = () => {
  const state = useSelector((store) => store.nav);
  const dispatch = useDispatch();

  const detailClick = (index) => {
    console.log(index);
    return `/images/example/${index + 1}.jpeg`;
  };

  return (
    <Container>
      {itemData
        .filter(
          (item) =>
            (state.category === 'all' || state.category === item.type) && item
        )
        .map((item, index) => {
          return (
            <Link key={index} to={`/main/project/${index + 1}`}>
              <ImgWrapper>
                <ImageItem src={item.img} alt={item.title} />
              </ImgWrapper>
            </Link>
          );
        })}
    </Container>
  );
};

export default Content;

const itemData = [
  {
    img: '/images/example/1.jpeg',
    title: 'Breakfast',
    type: 'first',
  },
  {
    img: '/images/example/2.jpeg',
    title: 'Burger',
    type: 'first',
  },
  {
    img: '/images/example/3.jpeg',
    title: 'Camera',
    type: 'second',
  },
  {
    img: '/images/example/4.jpeg',
    title: 'Coffee',
    type: 'second',
  },
  {
    img: '/images/example/5.jpeg',
    title: 'Hats',
    type: 'second',
  },
  {
    img: '/images/example/6.jpeg',
    title: 'Honey',
    type: 'third',
  },
  {
    img: '/images/example/7.jpeg',
    title: 'Basketball',
    type: 'first',
  },
  {
    img: '/images/example/8.jpeg',
    title: 'Fern',
    type: 'fourth',
  },
  {
    img: '/images/example/9.jpeg',
    title: 'Breakfast',
    type: 'third',
  },
  {
    img: '/images/example/10.jpeg',
    title: 'Burger',
    type: 'first',
  },
  {
    img: '/images/example/11.jpeg',
    title: 'Camera',
    type: 'first',
  },
  {
    img: '/images/example/12.jpeg',
    title: 'Coffee',
    type: 'first',
  },
  {
    img: '/images/example/13.jpeg',
    title: 'Hats',
    type: 'fourth',
  },
  {
    img: '/images/example/14.jpeg',
    title: 'Honey',
    type: 'first',
  },
  {
    img: '/images/example/15.jpeg',
    title: 'Basketball',
    type: 'first',
  },
];
