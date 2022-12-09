import styled from "@emotion/styled";
import ConnectImg1 from "../../assets/connectImg1.svg";
import ConnectImg2 from "../../assets/connectImg2.svg";
import CheckImg from "../../assets/checkImg.svg";
import { Button } from "../Button/Button";
import { ButtonVariants } from "../../enums/ButtonVariants";

export const ConnectSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <ContainerBlocksSC>
          <ImageContainerSC>
            <ImageSC src={ConnectImg1} />
          </ImageContainerSC>
          <TextContainerSC>
            <Title>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Title>
            <DescriptionBlockSC>
              <DescriptionSC>
                <CheckImgSC src={CheckImg} />
                <CheckText>We connect our customers with the best.</CheckText>
              </DescriptionSC>
              <DescriptionSC>
                <CheckImgSC src={CheckImg} />
                <CheckText>Advisor success customer launch party.</CheckText>
              </DescriptionSC>
              <DescriptionSC>
                <CheckImgSC src={CheckImg} />
                <CheckText>Business-to-consumer long tail.</CheckText>
              </DescriptionSC>
            </DescriptionBlockSC>
            <Button variant={ButtonVariants.primary}>Start now</Button>
          </TextContainerSC>
        </ContainerBlocksSC>
        <ContainerBlocksSC>
          <TextContainerSC>
            <Title>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Title>
            <DescriptionBlockSC>
              <Block />
            </DescriptionBlockSC>
          </TextContainerSC>
          <ImageContainerSC>
            <ImageSC src={ConnectImg2} />
          </ImageContainerSC>
        </ContainerBlocksSC>
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
  max-width: 1920px;
  width: 100%;

  padding: 0 100px;
`;

export const ContainerBlocksSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 150px;

  margin-bottom: 120px;
`;
export const ImageContainerSC = styled.div`
  max-width: 494px;
  width: 100%;
`;
export const ImageSC = styled.img`
  width: 100%;
`;

export const TextContainerSC = styled.div``;

export const Title = styled.h4`
  font-weight: 400;
  font-size: 36px;
  line-height: 56px;
`;

export const DescriptionBlockSC = styled.div`
  display: flex;
  row-gap: 24px;
  flex-direction: column;

  margin: 40px 0 56px;
`;
export const DescriptionSC = styled.div`
  display: flex;
  align-items: center;

  column-gap: 27px;
`;

export const CheckImgSC = styled.img`
  width: 36px;
`;

export const CheckText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
`;

export const Block = styled.div`
  background-color: #bbbbbb;

  width: 500px;
  height: 252px;
`;
