import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from 'static/images/logo.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  /* background-color: #eee; */
  padding: 0px 84px;
`;

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  /* background-color: #fff; */
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`;

const Block = styled.div`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  /* border: 1px solid black; */
  /* https://db2dev.tistory.com/entry/React-resize-이벤트-다루기 */
  /* display: ${props => (props.width < 20 ? 'none' : 'flex')}; */
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LogoComp = styled(Logo)`
  height: ${props => props.height};

  @media only screen and (max-width: 768px) {
    height: 72px;
  }
`;

const ASIDE_WIDTH = 256;
const CONTENT_WIDTH = 640;
const HEADER_HEIGHT = 136;

function Main() {
  return (
    <>
      <Container>
        <ContentArea>
          <Block width={`${ASIDE_WIDTH}px`} height={`${HEADER_HEIGHT}px`}>
            <LogoWrapper>
              <LogoComp height={`${86}px`}></LogoComp>
            </LogoWrapper>
          </Block>
          <Block width={`calc(100% - ${ASIDE_WIDTH}px - ${CONTENT_WIDTH}px - 2px)`} height={`${HEADER_HEIGHT}px`}>2</Block>
          <Block width={`${CONTENT_WIDTH}px`} height={`${HEADER_HEIGHT}px`}>3</Block>
          <Block width={`${ASIDE_WIDTH}px`} height={ `calc(100vh - ${HEADER_HEIGHT}px)`}>1</Block>
          <Block width={`calc(100% - ${ASIDE_WIDTH}px - ${CONTENT_WIDTH}px - 2px)`} height={ `calc(100vh - ${HEADER_HEIGHT}px)`}>2</Block>
          <Block width={`${CONTENT_WIDTH}px`} height={ `calc(100vh - ${HEADER_HEIGHT}px)`}>3</Block>
        </ContentArea>
      </Container>
    </>
  )
}

export default Main;