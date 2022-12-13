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
  /* color: rgb(10, 38, 64); */
  /* background: linear-gradient(
    to left,
    rgba(117, 117, 117, 0.002) 80%,
    rgba(235, 235, 235, 0.1) 100%
  ); */
  background: linear-gradient(
    to left,
    rgba(117, 117, 117, 0.002) 80%,
    rgb(10, 38, 64) 100%
  );
  /* background: linear-gradient(to right, #eeeeeed2 100%, #eee 20%); */

  /* inset #757575 0 0 0 0, inset #757575 5px 0 0 5px, inset #757575 0 0 0 0,
    inset #757575 5px 0 0 5px; */
`;
export const LogoContainerSC = styled.div`
  width: 144px;
  height: 42px;
`;
