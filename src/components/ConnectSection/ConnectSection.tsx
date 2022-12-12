import CheckImg from "../../assets/checkImg.svg";
import ConnectImg1 from "../../assets/connectImg1.svg";
import ConnectImg2 from "../../assets/connectImg2.svg";
import { ReactComponent as EyeImg } from "../../assets/eye.svg";
import { ReactComponent as FeatherImg } from "../../assets/feather.svg";
import { ReactComponent as SunImg } from "../../assets/sun.svg";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { Button } from "../Button/Button";
import {
  AdvantageSC,
  AdvantagesContainerSC,
  CheckImgSC,
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
                  variant={VariantsTypography.paragraphMBold}
                  color={Colors.PRIMARY}
                >
                  30%
                </Typography>
                <Typography
                  variant={VariantsTypography.subtitle}
                  color={Colors.PRIMARY}
                >
                  More income in June
                </Typography>
              </DescriptionDiagramSC>
            </ContainerDiagramSC>
          </ContainerImageAndDiagramSC>

          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={VariantsTypography.h4}>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              {config.map((item) => (
                <DescriptionSC>
                  <CheckImgSC src={CheckImg} />
                  <Typography variant={VariantsTypography.paragraphS}>
                    {item.text}
                  </Typography>
                </DescriptionSC>
              ))}
            </DescriptionBlockSC>
            <Button variant={ButtonVariants.primary}>Start now</Button>
          </TextContainerSC>
        </ContainerBlocksSC>
        <ContainerBlocksSC>
          <TextContainerSC>
            <Typography variant={VariantsTypography.h4}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Typography>
            <DescriptionBlockSC>
              <AdvantagesContainerSC>
                {config.map((item) => (
                  <AdvantageSC>
                    {item.image}
                    <Typography variant={VariantsTypography.paragraphS}>
                      {item.text}
                    </Typography>
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
