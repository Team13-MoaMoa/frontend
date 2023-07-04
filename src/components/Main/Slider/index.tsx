import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from '@emotion/styled';
export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>
      <BannerDiv bgColor={'#e3f3ff'}>
        <article>
          <div className="letters">
            <div>스터디와 사이드 프로젝트를 찾는 가장 쉬운 방법</div>
            <div>MOA MOA 에서 찾아보세요🔍</div>
          </div>
          <Player
            src="https://assets1.lottiefiles.com/packages/lf20_xxyvtiab.json"
            className="players"
            loop
            autoplay
          />
        </article>
      </BannerDiv>
      <BannerDiv bgColor={'#B4E0D2'}>
        <article>
          <div className="letters">
            <div>MOA MOA!는 당신과 함께 할 준비 완료</div>
            <div>더 편해진 기능! 사람들 어서 모아모아🤲</div>
          </div>
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_1t8na1gy.json"
            className="players"
            loop
            autoplay
          />
        </article>
      </BannerDiv>
    </Slider>
  );
}

const BannerDiv = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 33rem;

  & > article {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin: 0 auto;
    & > div:last-child {
      width: 40%;
      margin-right: auto;
    }

    & > .letters {
      font-size: 3.2rem;
      width: 60%;
      margin: auto 0;
      & > div:last-child {
        margin-top: 2rem;
        font-size: 2.2rem;
      }
    }

    #lottie {
      height: 100%;
      margin: auto 0;
    }
  }
`;
