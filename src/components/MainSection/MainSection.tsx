import { ButtonVariants } from "../../enums/ButtonVariants";
import { Button } from "../Button/Button";
import {
  Block,
  BlockImages,
  ContainerButtonsSC,
  ContainerDescriptionSC,
  ContainerSC,
  ContainerWithTwoBlocksSC,
  Description,
  MainContainerSC,
  Title,
  WrapperSC,
} from "./style";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <WrapperSC>
        <ContainerSC>
          <ContainerWithTwoBlocksSC>
            <ContainerDescriptionSC>
              <Title>Save time by building fast with Boldo Template</Title>
              <Description>
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </Description>
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
