import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';

const Container = styled.div`
  width: 640px;
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
`;

const ImageContainer = styled.img`
  box-sizing: border-box;
  width: 640px;
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
