import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import { Colors } from "../../ui";
interface IProps {
  background: string;
}
export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.PRIMARY};
`;
export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 96px 150px;
  position: relative;
`;
export const TitleContainerSC = styled.div`
  max-width: 716px;
  width: 100%;
`;
export const TitleSC = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: ${Colors.INFOLIGHT};
`;

export const CustomSwiperSC = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* .swiper-button-prev {
    background-color: aqua;
    position: absolute;
    top: -10px;
    left: -10px;
  } */
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: linear;
  }
  /* .swiper-container {
    direction: "vertical";
  } */
`;

export const ContainerSlideSC = styled.div`
  max-width: 350px;
  width: 100%;
  padding: 40px;
  background-color: ${Colors.INFOLIGHT};

  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;

export const CommentSliderSC = styled.p`
  font-size: 24px;
  line-height: 36px;
`;
export const AuthorSliderSC = styled.div`
  margin-top: 40px;
  display: flex;
  column-gap: 16px;
`;

export const AuthImageSC = styled.div<IProps>`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;
export const AuthorInfromationSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const AuthorNameSC = styled.p`
  font-weight: 700;
  line-height: 32px;
  color: ${Colors.PRIMARY};
`;
export const AuthorPositionSC = styled.p`
  font-size: 14px;
  line-height: 32px;
  color: ${Colors.PRIMARY};
`;
export const ContainerSwiperSC = styled.div`
  width: 100%;
  margin-top: 72px;
`;
