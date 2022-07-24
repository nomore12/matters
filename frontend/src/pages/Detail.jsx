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

import { Swiper, SwiperSlide } from 'swiper/react';
import '/Users/noseongho/Documents/projects/alba/matters/frontend/node_modules/swiper/swiper.min.css';
import '/Users/noseongho/Documents/projects/alba/matters/frontend/node_modules/swiper/swiper-bundle.css';
// import '/Users/noseongho/Documents/projects/alba/matters/frontend/node_modules/swiper/swiper/navigation';
// import '/Users/noseongho/Documents/projects/alba/matters/frontend/node_modules/swiper/navigation.min.css';
import { Navigation } from 'swiper';

const Container = styled(PerfectScrollbar)`
  width: 640px;
  max-height: calc(100% - 128px);
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  line-height: 1.1em;

  .detail-wrapper {
    padding: 2px;
    width: 100%;
  }

  .carousel-area {
    width: 600px;
    //height: 600px;
    @media only screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .swiper {
    //@media only screen and (max-width: 768px) {
    width: 100%;
    //}
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
    margin-top: 36px;
    //margin-top: 36px;
    width: 100%;
  }

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
  height: ${(props) => (props?.height ? props.height : '')};
  //height: 600px;
  object-fit: cover;
`;

const DescDetail = styled.p`
  width: 100%;
  white-space: pre-wrap;
  font-weight: 300;
  display: flex;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  margin-bottom: 0;
  display: flex;
`;

const Detail = (props) => {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState();
  const [detailImages, setDetailImages] = useState();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    (async function getImage() {
      const postDetail = `${localUrl}posts/${params.id}`;
      const postImages = `${localUrl}posts/images/${params.id}`;

      const requestPost = axios.get(postDetail);
      const requestImages = axios.get(postImages);

      await axios
        .all([requestPost, requestImages])
        .then(
          axios.spread((...response) => {
            const detailData = response[0].data[0].fields;
            const detailImages = response[1].data.map(
              (item) => item.fields.image
            );
            setDetailImages(detailImages);
            setTitle(detailData.title);
            setSubTitle(detailData.sudtitle);
            setDate(
              `${detailData.from_date.slice(0, 7)} ~ ${detailData.to_date.slice(
                0,
                7
              )}`
            );
            setImgSrc(detailImages[0]);
            setDesc(detailData.description.replaceAll('\n', '\n'));
          })
        )
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <Container>
      <div className="carousel-area">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          scollbar={{ draggable: true }}
          zoom={false}
          navigation={true}
          modules={[Navigation]}>
          {detailImages &&
            detailImages.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ImageContainer
                    src={`${localUrl}media/${item}`}
                    height={'600px'}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="info-area">
        <Title>{`| ${title} | ${subTitle} | ${date}`}</Title>
        <DescDetail>{desc}</DescDetail>
      </div>
    </Container>
  );
};

export default Detail;
