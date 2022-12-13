import { LinkVariants, TypographyVariants } from "../../enums";
import { routes } from "../../routes";
import { Colors, Typography } from "../../ui";
import { Bar } from "../Bars";
import { Link } from "../Link";
import { SliderLogos } from "../SliderLogos";

import {
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
      <WrapperSC id="product">
        <ContainerSC>
          <ContainerWithTwoBlocksSC>
            <ContainerDescriptionSC>
              <Typography
                variant={TypographyVariants.h3}
                color={Colors.INFOLIGHT}
              >
                Save time by building fast with Boldo Template
              </Typography>
              <ContainerDescriptionSC>
                <Typography
                  variant={TypographyVariants.paragraphXS}
                  color={Colors.INFOLIGHT}
                >
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </Typography>
              </ContainerDescriptionSC>

              <ContainerButtonsSC>
                <Link
                  to={routes.EXPLORE}
                  variant={LinkVariants.primaryGreenLarge}
                >
                  Buy template
                </Link>
                <Link
                  to={routes.EXPLORE}
                  variant={LinkVariants.secondaryWhiteLarge}
                >
                  Explore
                </Link>
              </ContainerButtonsSC>
            </ContainerDescriptionSC>

            <Bar />
          </ContainerWithTwoBlocksSC>

          <SliderLogos />
        </ContainerSC>
      </WrapperSC>
    </MainContainerSC>
  );
};
