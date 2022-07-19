import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getActions } from '../utils/stateUtils';
import { setCategory } from '../feature/navSlice';
import { ReactComponent as Logo } from 'static/images/logo.svg';

const Container = styled.div`
  display: flex;
  width: 640px;
  //height: 100%;
  height: 100px;
  align-content: flex-start;
  gap: 10px;
  padding-left: 80px;
  flex-wrap: wrap;
  overflow-y: auto;
  font-size: 12px;
  border: 1px solid black;

  & h4 {
    margin: 0px;
  }

  & p {
    line-height: 1.6em;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    margin-top: 48px;
    font-size: 0.7rem;
  }
`;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActions('HOME')());
    dispatch(setCategory('all'));
    console.log('home');
  }, []);

  return (
    <Container>
      {/*{'ddd'}*/}
      <Logo height="200px" current="200px" />
    </Container>
  );
}

export default Home;
