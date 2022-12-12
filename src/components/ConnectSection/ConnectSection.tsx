import CheckImg from "../../assets/checkImg.svg";
import ConnectImg1 from "../../assets/connectImg1.svg";
import ConnectImg2 from "../../assets/connectImg2.svg";
import { ReactComponent as EyeImg } from "../../assets/eye.svg";
import { ReactComponent as FeatherImg } from "../../assets/feather.svg";
import { ReactComponent as SunImg } from "../../assets/sun.svg";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { Colors } from "../../ui";
import { Button } from "../Button/Button";
import {
  AdvantageSC,
  AdvantagesContainerSC,
  CheckImgSC,
  CheckText,
  Column,
  ContainerBlocksSC,
  ContainerDiagramSC,
  ContainerImageAndDiagramSC,
  ContainerSC,
  DescriptionBlockSC,
  DescriptionDiagramSC,
  DescriptionSC,
  DiagramBottomSC,
  DiagramTopSC,
  ImageContainerSC,
  RateDescriptionSC,
  RateSC,
  SectionSC,
  TextAdvantageSC,
  TextContainerSC,
  Title,
} from "./style";

const config = [
  { text: "We connect our customers with the best. ", image: <FeatherImg /> },
  { text: "Advisor success customer launch party. ", image: <EyeImg /> },
  { text: "Business-to-consumer long tail. ", image: <SunImg /> },
];

export const ConnectSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <ContainerBlocksSC>
          <ContainerImageAndDiagramSC>
            <ImageContainerSC height="506px" background={ConnectImg1} />
            <ContainerDiagramSC>
              <DiagramTopSC>
                <Column height="134px" background={Colors.INFOLIGHT} />
                <Column height="92px" background={Colors.INFOLIGHT} />
                <Column height="134px" background={Colors.LIGHTBLUE} />
                <Column height="92px" background={Colors.LIGHTBLUE} />
                <Column height="176px" background={Colors.PRIMARY} />
                <Column height="124px" background={Colors.LIGHTBLUE} />
                <Column height="150px" background={Colors.LIGHTBLUE} />
                <Column height="68px" background={Colors.LIGHTBLUE} />
              </DiagramTopSC>
              <DiagramBottomSC>
                <Column height="50px" background={Colors.LIGHTBLUE} />
                <Column height="28px" background={Colors.LIGHTBLUE} />
              </DiagramBottomSC>

              <DescriptionDiagramSC>
                <RateSC>30%</RateSC>
                <RateDescriptionSC> More income in June</RateDescriptionSC>
              </DescriptionDiagramSC>
            </ContainerDiagramSC>
          </ContainerImageAndDiagramSC>

          <TextContainerSC>
            <Title>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Title>
            <DescriptionBlockSC>
              {config.map((item) => (
                <DescriptionSC>
                  <CheckImgSC src={CheckImg} />
                  <CheckText>{item.text}</CheckText>
                </DescriptionSC>
              ))}
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
              <AdvantagesContainerSC>
                {config.map((item) => (
                  <AdvantageSC>
                    {item.image}
                    <TextAdvantageSC>{item.text}</TextAdvantageSC>
                  </AdvantageSC>
                ))}
              </AdvantagesContainerSC>
            </DescriptionBlockSC>
          </TextContainerSC>
          <ImageContainerSC height="524px" background={ConnectImg2} />
        </ContainerBlocksSC>
      </ContainerSC>
    </SectionSC>
  );
};
