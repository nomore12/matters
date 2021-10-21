import React from 'react';
import styled from 'styled-components';
import { Grid, Box } from '@mui/material';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  background-color: #eee;
`;

const ContentArea = styled.div`
  display: flex;
  width: 1160px;
  background-color: #fff;
  height: 100%;
`;

const RowBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height};
  border: 1px solid black;
`;

const ColumnBlock = styled.div`
  width: ${props => props.width};
  height: ${(props) => props.height};
  border: 1px solid black;
  background-color: blue;

  @media only screen and (min-width: 768px) {
    background-color: red;
  }
`;

function Main() {
  return (
    <>
      <Container>
        <ContentArea>
          <ColumnBlock width="500px" height="200px" />
        </ContentArea>
      </Container>
    </>
  )
}

export default Main;