import { ButtonVariants } from "../../enums/ButtonVariants";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { Button } from "../Button/Button";
import {
  Block,
  BlockImages,
  ContainerButtonsSC,
  ContainerDescriptionSC,
  ContainerSC,
  ContainerWithTwoBlocksSC,
  MainContainerSC,
  WrapperSC,
} from "./style";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <WrapperSC>
        <ContainerSC>
          <ContainerWithTwoBlocksSC>
            <ContainerDescriptionSC>
              <Typography
                variant={VariantsTypography.h3}
                color={Colors.INFOLIGHT}
              >
                Save time by building fast with Boldo Template
              </Typography>
              <ContainerDescriptionSC>
                <Typography
                  variant={VariantsTypography.paragraphXS}
                  color="#f1f1f1"
                >
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </Typography>
              </ContainerDescriptionSC>

              <ContainerButtonsSC>
                <Button variant={ButtonVariants.secondary}>Buy template</Button>
                <Button variant={ButtonVariants.primaryWithBorder}>
                  Explore
                </Button>
              </ContainerButtonsSC>
            </ContainerDescriptionSC>
            <Block />
          </ContainerWithTwoBlocksSC>

          <BlockImages />
        </ContainerSC>
      </WrapperSC>
    </MainContainerSC>
  );
};
