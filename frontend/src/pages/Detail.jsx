import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';

const Container = styled.div`
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
    console.log(props.match.params.id);
  }, []);

  return (
    <Container>
      <ImageContainer src={`/images/example/${props.match.params.id}.jpeg`} />
      <h1>project name</h1>
      <p>Laboris consequat amet excepteur et ad in eiusmod dolor minim ad.</p>
    </Container>
  );
};

export default Detail;
