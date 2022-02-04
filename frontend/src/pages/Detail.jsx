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

const Detail = (props) => {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState();
  const location = useLocation();
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
          console.log('detail response', response);
          setImgSrc(response.data[0].fields.main_image);
          setDesc(response.data[0].fields.description);
          // setDesc(response.data[0].fields.description);
          // setImageData(response.data);
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
      <p>{desc}</p>
    </Container>
  );
};

export default Detail;
