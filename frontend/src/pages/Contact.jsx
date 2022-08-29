import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getActions } from '../utils/stateUtils';
import { setCategory } from '../feature/navSlice';
import bigmap from '../static/images/big-map.png';

const Container = styled.div`
  width: 720px;
  flex-direction: row;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  //justify-content: flex;
  gap: 10px;
  padding-left: 80px;
  line-height: 1.1em;
  font-size: 12px;

  & h4 {
    margin: 0px;
    font-weight: 400;
  }

  & span {
    font-weight: 600;
  }

  & .contact {
    margin-bottom: 6px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    margin-top: 48px;
  }
`;

const Matters = styled.div`
  margin-bottom: 20px;
`;

const Map = styled.div`
  //margin-top: 40px;
`;

function Contact() {
  const dispatch = useDispatch();
  const [imgWidth, setImgWidth] = useState();
  const isMobile = useSelector((state) => state.nav.isMobile);

  useEffect(() => {
    dispatch(getActions('CONTACT')());
    dispatch(setCategory('all'));
  }, []);

  return (
    <Container>
      <div>
        <Matters>
          <h4>
            매스 앤 매터스. / <span>Mass and Matters</span>
          </h4>
        </Matters>
        <h4 className="contact">T.070-4206-4229</h4>
        <h4 className="contact">E. ys.choi@massnmatters.com</h4>
        <h4 className="contact">A. 서울시 서대문구 연회로 26가길 2, 2층</h4>
      </div>
      <div>
        <Map>
          <img src={bigmap} width={isMobile ? '100%' : '560px'} />
        </Map>
      </div>
    </Container>
  );
}

export default Contact;
