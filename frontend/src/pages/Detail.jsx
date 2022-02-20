import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { useParams, useRouteMatch, useLocation } from 'react-router-dom';

const Container = styled(PerfectScrollbar)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding-left: 80px;
  line-height: 1.1em;

  & h4 {
    margin: 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.img`
  box-sizing: border-box;
  width: 100%;
  object-fit: contain;
`;

const DescDetail = styled.p`
  width: 100%;
  white-space: pre-wrap;
  font-weight: 300;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  /* margin: 1rem; */
  margin-bottom: 0;
`;

const Detail = (props) => {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState();
  const location = useLocation();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    console.log('detail', props, params);
    // const src = location.pathname;
    // setImgSrc(src.substring(13, src.length));

    (async function getImage() {
      await axios
        .get(`https://mattersbackend.herokuapp.com/posts/${params.id}`)
        .then(function (response) {
          // 성공 핸들링
          setImgSrc(response.data[0].fields.main_image);
          setTitle(response.data[0].fields.title);
          setDesc(response.data[0].fields.description.replaceAll('\n', '\n'));
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log('detail response error', error);
        })
        .then(function () {
          // 항상 실행되는 영역
        });
    })();
    // getImage();
  }, []);

  // async function getPostDetail() {

  // }

  return (
    <Container>
      <ImageContainer
        src={`https://mattersbackend.herokuapp.com/media/${imgSrc}`}
      />
      <Title>{title}</Title>
      <DescDetail>{desc}</DescDetail>
    </Container>
  );
};

export default Detail;
