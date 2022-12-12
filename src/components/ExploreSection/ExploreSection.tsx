import styled from "@emotion/styled";
import ArrowRight from "../../assets/arrowRight.svg";
import ExploreImg1 from "../../assets/exploreImg1.svg";
import ExploreImg2 from "../../assets/exploreImg2.svg";
import ExploreImg3 from "../../assets/exploreImg3.svg";

export const ExploreSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <TitleSC>
          Handshake infographic mass market crowdfunding iteration.
        </TitleSC>
        <ContainerOfBlocksSC>
          <BlockSC>
            <ImageSC src={ExploreImg1} alt="explore section" />
            <TitlOfBlockSC>Cool feature title</TitlOfBlockSC>
            <DescriptionOfBlockSC>
              Learning curve network effects return on investment.
            </DescriptionOfBlockSC>
            <LinkBlockSC>
              <LinkSC>Explore page</LinkSC>
              <img src={ArrowRight} alt="arrow" />
            </LinkBlockSC>
          </BlockSC>
          <BlockSC>
            <ImageSC src={ExploreImg2} alt="explore section" />
            <TitlOfBlockSC>Cool feature title</TitlOfBlockSC>
            <DescriptionOfBlockSC>
              Learning curve network effects return on investment.
            </DescriptionOfBlockSC>
            <LinkBlockSC>
              <LinkSC>Explore page</LinkSC>
              <img src={ArrowRight} alt="arrow" />
            </LinkBlockSC>
          </BlockSC>
          <BlockSC>
            <ImageSC src={ExploreImg3} alt="explore section" />
            <TitlOfBlockSC>Cool feature title</TitlOfBlockSC>
            <DescriptionOfBlockSC>
              Learning curve network effects return on investment.
            </DescriptionOfBlockSC>
            <LinkBlockSC>
              <LinkSC>Explore page</LinkSC>
              <img src={ArrowRight} alt="arrow" />
            </LinkBlockSC>
          </BlockSC>
        </ContainerOfBlocksSC>
      </ContainerSC>
    </SectionSC>
  );
};

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
`;
export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px;
`;
export const TitleSC = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
`;
export const ContainerOfBlocksSC = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 100px;
  width: 100%;
  margin-top: 80px;
`;

export const ImageSC = styled.img`
  width: 100%;
`;

export const BlockSC = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

export const TitlOfBlockSC = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-top: 24px;
`;

export const DescriptionOfBlockSC = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  color: #777777;
  margin-top: 12px;
`;
export const LinkBlockSC = styled.div`
  max-width: 164px;
  width: 100%;
  margin-top: 28px;
  border-bottom: 1px solid #0a2640;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LinkSC = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;

  color: #0a2640;
`;
