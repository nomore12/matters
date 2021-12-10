import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 640px;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  padding-left: 80px;

  & h4 {
    margin: 0px;
  }

  & p {
    line-height: 1.6em;
  }
`;

function About() {
  return (
    <Container>
      <p>
        최윤성 / <b>Yoonsung Choi</b>
        <br />
        소장 / <b>Director</b>
        <br />
        아름지기 아트디렉터 / <b>Art Director at Arumjigi Foundation</b>
      </p>
      <p>
        매스 앤 매터스./<b>Mass and Matters.</b>
      </p>
      <p>
        <b>MASS</b>
        <br />
        1. (정확한 형체가 없는) 덩어리
        <br />
        2. (양이) 많은 ~ <br />
        3. (흔이 제멋대로 모여 있는 많은 사람·사물의) 무리
      </p>
      <p>
        <b>MATTERS</b>
        <br />
        1. (고려하거나 처리해야 할) 문제
        <br />
        2. 상황, 사태, 사정
        <br />
        3. (걱정·고민 등의 원인이 되는)문제
      </p>
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
