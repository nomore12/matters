import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { useParams, useRouteMatch, useLocation } from 'react-router-dom';
import { herokuUrl, localUrl } from '../constant/urls';

const Container = styled(PerfectScrollbar)`
  //height: 100%;
  width: 640px;
  //display: flex;
  //flex-direction: column;
  //align-items: flex-end;
  //gap: 10px;
  padding-left: 40px;
  line-height: 1.1em;
  position: relative;
  overflow: auto;
  //height: 100%;
  //display: flex;
  //flex-direction: column;

  //& h4 {
  //  margin: 0px;
  //}

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  //padding-left: 80px;
  //line-height: 1.1em;
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
  height: 600px;
  object-fit: cover;
`;

const DescDetail = styled.p`
  width: 100%;
  //height: 100%;
  white-space: pre-wrap;
  font-weight: 300;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  //height: 1rem; /* margin: 1rem; */
  margin-bottom: 0;
`;

const Box = styled.div`
  padding: 20px;
  height: 400px;
  width: 200px;
  margin: 2px;
  background-color: lightsalmon;
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
        .get(`${localUrl}posts/${params.id}`)
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
      {/*<ImageContainer src={`${localUrl}media/${imgSrc}`} />*/}
      {/*<Title>{title}</Title>*/}
      {/*<DescDetail>{desc}</DescDetail>*/}
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Container>
  );
};

export default Detail;
