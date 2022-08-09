import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { herokuUrl, localUrl } from '../constant/urls';

import { Navigation, Lazy, Zoom, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module

const Container = styled(PerfectScrollbar)`
  width: 720px;
  //max-height: calc(100% - 128px);
  max-height: 680px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  line-height: 1.1em;

  .detail-wrapper {
    padding: 2px;
    width: 100%;
  }

  .carousel-area {
    width: 680px;
    @media only screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    height: 680px;
    @media only screen and (max-width: 768px) {
      height: 100%;
    }
  }

  .swiper-zoom-container {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
    margin-top: 36px;
    width: 100%;
  }

  & h4 {
    margin: 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }

  img {
    object-fit: scale-down;
  }

  .title {
    font-weight: 500;
    font-size: 18px;
    width: 100%;
    margin-bottom: 0;
    display: flex;
  }

  .subtitle {
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    margin-bottom: 0;
    display: flex;
  }
`;

const ImageContainer = styled.img`
  box-sizing: border-box;
  //width: 100%;
  // height: ${(props) => (props?.height ? props.height : '')};
  //height: 600px;
  //object-fit: scale-down;
`;

const DescDetail = styled.p`
  width: 100%;
  white-space: pre-wrap;
  font-weight: 300;
  display: flex;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  margin-top: 22px;
  margin-bottom: 0;
  display: flex;
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
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
  const [location, setLocation] = useState();

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
            setLocation(detailData.location);
          })
        )
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <Container>
      <div className="carousel-area">
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // allowHeight={true}
          scollbar={{ draggable: true }}
          zoom={true}
          navigation={true}
          lazy={true}
          // pagenation={{ type: 'fraction' }}
          modules={[Navigation, Lazy, Zoom]}>
          {detailImages &&
            detailImages.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <ImageContainer src={`${localUrl}media/${item}`} />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="info-area">
        <p className="title">{`| ${title} |`}</p>
        <p className="subtitle">{`| ${subTitle} | ${date}`}</p>
        {/*<Title>{`| ${title} | ${subTitle} | ${date}`}</Title>*/}
        <DescDetail>{desc}</DescDetail>
      </div>
    </Container>
  );
};

export default Detail;
