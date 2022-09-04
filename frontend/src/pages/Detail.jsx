import React, { useEffect, useRef, useState } from 'react';
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

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ContainerStyle = styled.div`
  width: 720px;
  max-height: 680px;
  display: flex;
  flex-direction: column;
  line-height: 1.1em;

  .alice-carousel {
    position: relative;
  }

  .alice-carousel__dots {
    display: none;
  }

  .alice-carousel__stage-item {
    width: 100%;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    width: 20px;
    position: absolute;
    top: 180px;

    & * span {
      color: white;
      font-size: 2rem;
    }
  }

  .alice-carousel__next-btn {
    right: 15px;
  }
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

const handleDragStart = (e) => e.preventDefault();

const SlideItemStyle = styled.img`
  width: auto;
  object-fit: contain;
  max-height: 540px;
  padding: 0 5px;
`;

const LazyLoader = (props) => {
  let timerId;
  const { src = '', delay = 0, onLoad } = props;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
    image.onerror = () => {
      setLoading(false);
    };
  }

  const [imgSrc, setImgSrc] = useState();
  const ref = useRef(null);

  useEffect(() => {
    setImgSrc(props.src);
    // console.log(ref.current.width);
    if (!isMounted) {
      setMounted(true);
      delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
    }
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <SlideItemStyle
      ref={ref}
      className="slide-image"
      src={imgSrc}
      onDragStart={handleDragStart}
      role="presentation"
      alt="slide-image"
    />
  );
};

const Detail = (props) => {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState();
  const [detailImages, setDetailImages] = useState([]);
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();
  const [location, setLocation] = useState();

  // lazy loading
  const [, setTimestamp] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const onLoad = () => setTimestamp(Date.now());
  const onSlideChanged = ({ item }) => setActiveIndex(item);

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

  const slideItems = detailImages.map((item, index) => {
    return (
      <LazyLoader
        src={`${localUrl}media/${item}`}
        key={index}
        onLoad={onLoad}
      />
    );
  });

  return (
    <div style={{ marginLeft: '36px' }}>
      <ContainerStyle>
        <AliceCarousel
          mouseTracking
          items={slideItems}
          autoWidth
          disableButtonsControls={true}
          activeIndex={activeIndex}
          onSlideChanged={onSlideChanged}
        />
      </ContainerStyle>
      <div className="info-area">
        <p className="title">{`| ${title} |`}</p>
        <p className="subtitle">{`| ${subTitle} | ${date}`}</p>
        <DescDetail>{desc}</DescDetail>
      </div>
    </div>
  );
};

export default Detail;
