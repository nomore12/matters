import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 640px;
  flex-direction: row;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex;
  gap: 10px;
  padding-left: 80px;
  line-height: 1.1em;

  & h4 {
    margin: 0px;
  }
`;

const Matters = styled.div`
  margin-bottom: 20px;
`;

const Map = styled.div`
  margin-top: 40px;
`;

function Contact() {
  return (
    <Container>
      <div>
        <Matters>
          <h4>
            매스 앤 매터스./<b>Mass and Matters</b>
          </h4>
        </Matters>
        <div>
          <h4>T.070-4206-4229</h4>
        </div>
        <div>
          <h4>E. ys.choi@massnmatters.com</h4>
        </div>
        <div>
          <h4>A. 서울시 서대문구 연회로 26가길 2, 2층</h4>
        </div>
      </div>
      <div>
        <Map>
          <img src={'/images/map.png'} width={'560px'} />
        </Map>
      </div>
    </Container>
  );
}

export default Contact;
