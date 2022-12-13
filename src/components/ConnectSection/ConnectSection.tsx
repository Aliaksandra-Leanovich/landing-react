import CheckImg from "../../assets/checkImg.svg";
import ConnectImg1 from "../../assets/connectImg1.svg";
import ConnectImg2 from "../../assets/connectImg2.svg";
import { ReactComponent as EyeImg } from "../../assets/eye.svg";
import { ReactComponent as FeatherImg } from "../../assets/feather.svg";
import { ReactComponent as SunImg } from "../../assets/sun.svg";
import { LinkVariants, TypographyVariants } from "../../enums";
import { routes } from "../../routes";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";

import {
  AdvantageSC,
  AdvantagesContainerSC,
  BlockWithCirclSC,
  CheckImgSC,
  CircleSC,
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
  DotSC,
  ImageContainerSC,
  PersentsBlockSC,
  PersentsContainerSC,
  PersentTextSC,
  SectionSC,
  TextContainerSC,
  TitleContainerSC,
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
                <Typography
                  variant={TypographyVariants.paragraphMBold}
                  color={Colors.PRIMARY}
                >
                  30%
                </Typography>
                <Typography
                  variant={TypographyVariants.subtitle}
                  color={Colors.PRIMARY}
                >
                  More income in June
                </Typography>
              </DescriptionDiagramSC>
            </ContainerDiagramSC>
          </ContainerImageAndDiagramSC>

          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={TypographyVariants.h4}>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              {config.map((item) => (
                <DescriptionSC>
                  <CheckImgSC src={CheckImg} />
                  <Typography variant={TypographyVariants.paragraphS}>
                    {item.text}
                  </Typography>
                </DescriptionSC>
              ))}
            </DescriptionBlockSC>
            <Link to={routes.EXPLORE} variant={LinkVariants.primaryLarge}>
              Start now
            </Link>
          </TextContainerSC>
        </ContainerBlocksSC>
        <ContainerBlocksSC>
          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={TypographyVariants.h4}>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              <AdvantagesContainerSC>
                {config.map((item) => (
                  <AdvantageSC>
                    {item.image}
                    <Typography variant={TypographyVariants.paragraphS}>
                      {item.text}
                    </Typography>
                  </AdvantageSC>
                ))}
              </AdvantagesContainerSC>
            </DescriptionBlockSC>
          </TextContainerSC>
          <ContainerImageAndDiagramSC>
            <ImageContainerSC height="524px" background={ConnectImg2} />
            <BlockWithCirclSC>
              <CircleSC />
              <PersentsBlockSC>
                <PersentsContainerSC>
                  <DotSC background={Colors.LIGHTBLUE} />
                  <PersentTextSC>35% - Agile Development</PersentTextSC>
                </PersentsContainerSC>
                <PersentsContainerSC>
                  <DotSC background={Colors.SECONDARY} />
                  <PersentTextSC>30% - Investor bandwidth</PersentTextSC>
                </PersentsContainerSC>
                <PersentsContainerSC>
                  <DotSC background={Colors.GRAY} />
                  <PersentTextSC>35% - A/B testing</PersentTextSC>
                </PersentsContainerSC>
              </PersentsBlockSC>
            </BlockWithCirclSC>
          </ContainerImageAndDiagramSC>
        </ContainerBlocksSC>
      </ContainerSC>
    </SectionSC>
  );
};
