import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 640px;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex;
  gap: 10px;
  padding-left: 80px;
  line-height: 1.6em;
`;

function Matters() {
  return (
    <Container>
      <p>매스 앤 매터스는,</p>
      <p>
        인테리어 디자인 스튜디오이며, 공간 디자인 외에도 가구 디자인, 제품 /
        오브제 디자인, 인스톨레이션, 전시 디자인 등을 통해 프로젝트를 다방면에서
        완성시키기 위해 다양한 접근을 진행하고 있습니다. <br />
        클라이언트의 니즈와 원활한 비지니스 운영을 위한 공간 및 운영 컨설팅
        외에도 브랜딩 작업과 프로젝트 매니징의 범위까지도 고려한 입체적 솔루션을
        클라이언트와 함께 고민하고 완성해 나갑니다.
      </p>
      <h1>IT MATTERS NOW.</h1>
      <i>
        <img src={'/images/instagram.png'} width={'72px'} />
      </i>
    </Container>
  );
}

export default Matters;
