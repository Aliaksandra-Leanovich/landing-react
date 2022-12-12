import styled from "@emotion/styled";
import { Colors } from "../../ui";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AthorImage1 from "../../assets/authorComment1.svg";
import AthorImage2 from "../../assets/autherComment2.svg";
import AthorImage3 from "../../assets/authorComment3.svg";

interface IProps {
  background: string;
}

const config = [
  {
    comment:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    authorName: "Albus Dumbledore",
    authorPosition: " Manager @ Howarts",
    authorImage: AthorImage1,
  },
  {
    comment:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    authorName: "Severus Snape",
    authorPosition: " Manager @ Slytherin",
    authorImage: AthorImage2,
  },
  {
    comment:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    authorName: "Harry Potter",
    authorPosition: " Team Leader @ Gryffindor",
    authorImage: AthorImage3,
  },
  {
    comment:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    authorName: "Albus Dumbledore",
    authorPosition: " Manager @ Howarts",
    authorImage: AthorImage1,
  },
  {
    comment:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    authorName: "Severus Snape",
    authorPosition: " Manager @ Slytherin",
    authorImage: AthorImage2,
  },
  {
    comment:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    authorName: "Harry Potter",
    authorPosition: " Team Leader @ Gryffindor",
    authorImage: AthorImage3,
  },
];

export const SliderSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <TitleContainerSC>
          <TitleSC>
            An enterprise template to ramp up your company website
          </TitleSC>
        </TitleContainerSC>
        <ContainerSwiperSC>
          <CustomSwiperSC
            navigation={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
          >
            {config.map((comment, index) => (
              <SwiperSlide key={index}>
                <ContainerSlideSC>
                  <CommentSliderSC>{comment.comment}</CommentSliderSC>
                  <AuthorSliderSC>
                    <AuthImageSC background={comment.authorImage} />
                    <AuthorInfromationSC>
                      <AuthorNameSC>{comment.authorName}</AuthorNameSC>
                      <AuthorPositionSC>
                        {comment.authorPosition}
                      </AuthorPositionSC>
                    </AuthorInfromationSC>
                  </AuthorSliderSC>
                </ContainerSlideSC>
              </SwiperSlide>
            ))}
          </CustomSwiperSC>
        </ContainerSwiperSC>
      </ContainerSC>
    </SectionSC>
  );
};

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
