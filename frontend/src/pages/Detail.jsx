import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Container = styled(PerfectScrollbar)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding-left: 80px;
  line-height: 1.1em;

  & h4 {
    margin: 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.img`
  box-sizing: border-box;
  width: 100%;
  object-fit: contain;
`;

const Detail = (props) => {
  useEffect(() => {
    console.log('detail', props.match.params.id, props);
  }, []);

  return (
    <Container>
      <ImageContainer
        src={`http://127.0.0.1:8000/media/main/852-768x860.jpg`}
      />
      {/* <h1>{props.title}</h1> */}
      <p>Laboris consequat amet excepteur et ad in eiusmod dolor minim ad.</p>
    </Container>
  );
};

export default Detail;
