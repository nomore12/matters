import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import { Navigation } from 'components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: aqua;
  padding: 0px 120px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  border: 1px solid black;
  padding-top: ${props => props.paddingTop};
  /* https://db2dev.tistory.com/entry/React-resize-이벤트-다루기 */
  /* display: ${props => (props.width < 20 ? 'none' : 'flex')}; */
`;

const LogoWrapper = styled.div`
  display: flex;
  /* align-items: flex-end;
  justify-content: flex-start; */
`;

const LogoComp = styled(Logo)`
  height: ${props => props.height};
  width: 123px;

  @media only screen and (max-width: 768px) {
    height: 72px;
  }
`;

const ASIDE_WIDTH = 256;
const CONTENT_WIDTH = 640;
const HEADER_HEIGHT = 136;

function Main() {
  const firstRowStyles = {display: 'flex', alignItems: 'flex-end'}

  return (
    <>
      <Container>
        <Row>
          <Block width={`${ASIDE_WIDTH}px`} height={`${HEADER_HEIGHT}px`} style={firstRowStyles}>
            <LogoWrapper >
              <LogoComp height={`${86}px`}></LogoComp>
            </LogoWrapper>
          </Block>
          {/* navigation */}
          <Block width={`${CONTENT_WIDTH}px`} height={`${HEADER_HEIGHT}px`} style={firstRowStyles}><Navigation /></Block>
        </Row>
        <Row>
          <Block paddingTop={"40px"} width={`${ASIDE_WIDTH}px`} height={ `calc(100vh - ${HEADER_HEIGHT}px)`}>menu</Block>
          <Block paddingTop={"40px"} width={`${CONTENT_WIDTH}px`} height={ `calc(100vh - ${HEADER_HEIGHT}px)`}>content</Block>
        </Row>
      </Container>
    </>
  )
}

export default Main;