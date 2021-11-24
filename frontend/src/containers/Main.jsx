import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'static/images/logo.svg';
import { Navigation, Content, Menu } from 'components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
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
  flex-grow: ${props => props.glow ? props.glow : 'none'};
  /* https://db2dev.tistory.com/entry/React-resize-이벤트-다루기 */
  /* display: ${props => (props.width < 20 ? 'none' : 'flex')}; */
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 256px;
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
  const firstRowStyles = { display: 'flex', alignItems: 'flex-end' };
  const contRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if(contRef.current.clientWidth > 1136) console.log(contRef.current.clientWidth);
    })
  }, []);

  return (
    <>
      <Container ref={contRef}>
        <Row>
          <Block>
            <LogoWrapper >
              <LogoComp height={`${86}px`}></LogoComp>
            </LogoWrapper>
          </Block>
          {/* 240 + 256 + 640 */}
          <Block glow={1}></Block>
          <Block ><Navigation /></Block>
        </Row>
        <Row>
          <Block><Menu></Menu></Block>
          <Block glow={1}></Block>
          <Block><Content></Content></Block>
        </Row>
      </Container>
    </>
  )
}

export default Main;