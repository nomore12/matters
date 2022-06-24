import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Instagram } from 'static/images/instagram.svg';
import { useDispatch } from 'react-redux';
import { getActions } from '../utils/stateUtils';

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
  font-size: 12px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    font-size: 0.7rem;
    margin-top: 36px;
  }

  .info {
    margin-top: auto;
    margin-bottom: 4rem;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const IT = styled.div`
  font-size: 2rem;
  font-weight: 800;
  animation: 3s ${fadeIn} ease-out;
  margin-right: 1rem;
`;

const MattersWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  margin-bottom: 3rem;
`;

const InstaLink = styled.div`
  height: 64px;
  font-size: 5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  overflow-wrap: break-word;
  padding-right: 80px;
`;

function Matters() {
  const [matters, setMatters] = useState(false);
  const [now, setNow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => setMatters(true), 3000);
    setInterval(() => setNow(true), 4000);
    dispatch(getActions('ABOUT')());
  }, []);

  return (
    <Container>
      <Introduce>매스 앤 매터스는,</Introduce>
      <Content>
        인테리어 디자인 스튜디오이며, 공간 디자인 외에도 가구 디자인, 제품 /
        오브제 디자인, 인스톨레이션, 전시 디자인 등을 통해 프로젝트를 다방면에서
        완성시키기 위해 다양한 접근을 진행하고 있습니다. <br />
        클라이언트의 니즈와 원활한 비지니스 운영을 위한 공간 및 운영 컨설팅
        외에도 브랜딩 작업과 프로젝트 매니징의 범위까지도 고려한 입체적 솔루션을
        클라이언트와 함께 고민하고 완성해 나갑니다.
      </Content>
      <div className="info">
        <MattersWrapper>
          <IT>IT</IT>
          {matters && <IT>MATTERS</IT>}
          {now && <IT>NOW.</IT>}
        </MattersWrapper>
        <InstaLink>
          <Instagram width="32px" height="32px"></Instagram>
        </InstaLink>
      </div>
    </Container>
  );
}

export default Matters;

const Introduce = styled.div`
  margin: 0;
`;
