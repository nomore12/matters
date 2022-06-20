import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getActions } from '../utils/stateUtils';

const Container = styled.div`
  display: flex;
  width: 640px;
  height: 100%;
  align-content: flex-start;
  gap: 10px;
  padding-left: 80px;
  flex-wrap: wrap;
  overflow-y: auto;
  font-size: 12px;

  & h4 {
    margin: 0px;
  }

  & p {
    line-height: 1.6em;
  }

  @media only screen and (max-width: 425px) {
    /* width: calc(100% - 160px); */
    padding: 0px;
    font-size: 0.7rem;
  }
`;

const NameComp = styled.div`
  display: flex;
  width: 100%;
`;

const BoldName = styled.div`
  font-weight: 700;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* & * {
    font-size: 12px;
  } */
`;

const NameBox = (props) => {
  return (
    <NameComp>
      <div>{props.first}</div>
      <div>{'\u00A0/\u00A0'}</div>
      <BoldName>{props.second}</BoldName>
    </NameComp>
  );
};

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActions('ABOUT')());
  }, []);

  return (
    <Container>
      <NameBox first="최윤성" second="Yoonsung Choi" />
      <NameBox
        first="아름지기 아트디렉터"
        second="Art Director at Arumjigi Foundation"
      />
      <NameBox first="매스 앤 매터스." second="Mass and Matters." />
      <Wrapper>
        <p>
          <b className="underline">MASS</b>
          <br />
          1. (정확한 형체가 없는) 덩어리
          <br />
          2. (양이) 많은 ~ <br />
          3. (흔이 제멋대로 모여 있는 많은 사람·사물의) 무리
        </p>
      </Wrapper>
      <Wrapper>
        <p>
          <b>MATTERS</b>
          <br />
          1. (고려하거나 처리해야 할) 문제
          <br />
          2. 상황, 사태, 사정
          <br />
          3. (걱정·고민 등의 원인이 되는)문제
        </p>
      </Wrapper>
      <p>
        모든 디자인에 있어서 컨셉이 중요하듯, 공간에 있어서 가장 먼저 고려되어야
        할 부분은 컨셉과 동시에 그 공간을 차지하고 있는 또는 차지하게 될
        MASS들이다. 그러한 MASS들은 올바른 컨셉을 실행시켜주는 큰 축이 되고,
        동시에 컨셉을 구현하기 위한 물리적인 초석이 되어준다. 또한, 사람들이
        숨쉬며 살아가는 공간은 물리적인 형태 외에도 고려되어져야 할 MATTERS가
        중요한데, 그 문제들은 해결되어져야 할 대상이기도 하면서 때로는 공간에
        생명을 불어넣어주는 목적의식, 영감, 차별성 들을 부여해주는 요소가 되기도
        한다.
      </p>
      <p>
        <b>Space Design & Programming</b>
        <br />
        <b>Design Inspection & Project Managing</b>
      </p>
    </Container>
  );
}

export default About;
