import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import { Detail } from 'pages';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { herokuUrl, localUrl } from '../constant/urls';
import { getActions } from 'utils/stateUtils';

const ContainerStyle = styled.div`
  width: 640px;
  height: calc(100% - 108px);
  display: block;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ScrollBarWrapper = styled(PerfectScrollbar)`
  width: 640px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  grid-template-rows: repeat(auto-fill, 204px);
  grid-gap: 2rem;
  justify-content: flex-end;
  padding-bottom: 24px;
  padding-right: 12px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const GrayscaleTransition = keyframes`
  0% {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  100% {
    -webkit-filter: none;
    filter: none;
  }
`;

const LinkWrapper = styled(Link)`
  //height: 164px !important;
`;

const ImageItem = styled.img`
  box-sizing: border-box;
  width: 164px;
  height: 164px;
  object-fit: contain;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    cursor: pointer;
    animation: ${GrayscaleTransition} 1.5s linear;
    animation-fill-mode: forwards;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 204px;
  width: 164px;
  position: relative;
`;

const ItemTitle = styled.p`
  height: 8px;
  position: absolute;
  bottom: 0;
`;

const Content = ({ imgData }) => {
  const state = useSelector((store) => store.nav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActions('PROJECT')());
  }, []);

  return (
    <ContainerStyle>
      <ScrollBarWrapper>
        {imgData
          .filter(
            (item) =>
              (state.category === 'all' ||
                state.category === item.fields.post_type) &&
              item
          )
          .map((item, index) => {
            console.log(item);
            return (
              <LinkWrapper
                key={index}
                to={{
                  pathname: `/main/project/${item.pk}`,
                  pk: item.pk,
                  state: {
                    pk: item.pk,
                    data: item,
                  },
                }}>
                <ItemWrapper>
                  <ImageItem
                    src={`${localUrl}media/${item.fields.thumbnail}`}
                    alt={item.fields.title}
                    title={item.fields.title}
                  />
                  <ItemTitle>{item.fields.title}</ItemTitle>
                </ItemWrapper>
                {/* </ImgWrapper> */}
              </LinkWrapper>
            );
          })}
      </ScrollBarWrapper>
    </ContainerStyle>
  );
};

export default Content;
