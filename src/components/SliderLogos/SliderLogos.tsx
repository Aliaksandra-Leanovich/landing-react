import styled from "@emotion/styled";
import { Keyboard, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as BoldoLogo } from "../../assets/BoldoLogo.svg";
import { ReactComponent as PrestoLogo } from "../../assets/PressLogo .svg";

export const SliderLogos = () => {
  return (
    <>
      <CustomSwiperSC
        cssMode={true}
        mousewheel={true}
        slidesPerView={3}
        spaceBetween={66}
        keyboard={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        speed={3000}
        // centeredSlides={true}
        // watchSlidesProgress={true}
        breakpoints={{
          1152: {
            slidesPerView: 6,
          },
        }}
        loop={true}
        modules={[Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LogoContainerSC>
            <PrestoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <BoldoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <PrestoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <BoldoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <PrestoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <BoldoLogo />
          </LogoContainerSC>
        </SwiperSlide>
      </CustomSwiperSC>
    </>
  );
};

export const CustomSwiperSC = styled(Swiper)`
  /* .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-visible {
    opacity: 1;
  }
  .swiper-slide-active {
    opacity: 1;
  } */

  width: 100%;
`;
export const LogoContainerSC = styled.div`
  width: 144px;
  height: 42px;
`;
