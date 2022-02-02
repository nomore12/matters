import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { navSlice } from 'feature/navSlice';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';

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
  const [imgData, setImgData] = useState();
  const params = useParams();

  useEffect(() => {
    console.log('detail', props.match.params.id, params);

    (async function () {
      await axios
        .get(`http://127.0.0.1:8000/posts/${params.id}/`)
        .then(function (response) {
          // 성공 핸들링
          const data = response.data;
          setImgData(data[0]);
          console.log('data', response);
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log('erros', error);
        })
        .then(function () {
          // 항상 실행되는 영역
        });
    })();

    // getImage(params.id);

    console.log('fetch', props.match.params.id, imgData);
  }, []);

  console.log(props, params, imgData);

  useEffect(() => {
    console.log('imgData', imgData);
  }, [imgData]);

  const getImage = async (id) => {
    await axios
      .get(`http://127.0.0.1:8000/posts/${id}/`)
      .then(function (response) {
        // 성공 핸들링
        const data = response.data;
        setImgData(data);
        console.log('data', data[0]);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log('erros', error);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
  };

  return (
    <Container>
      <ImageContainer
        src={`http://127.0.0.1:8000/media/${props.location.state.data.fields.main_image}`}
      />
      {/* <h1>{imgData}</h1> */}
      <p>Laboris consequat amet excepteur et ad in eiusmod dolor minim ad.</p>
    </Container>
  );
};

export default Detail;
