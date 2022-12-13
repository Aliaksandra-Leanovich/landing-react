import styled from "@emotion/styled";
import { Keyboard, Mousewheel } from "swiper";
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
        breakpoints={{
          1152: {
            slidesPerView: 6,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Mousewheel, Keyboard]}
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
  width: 100%;
`;
export const LogoContainerSC = styled.div`
  width: 144px;
  height: 42px;
`;
