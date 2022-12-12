import styled from "@emotion/styled";
import React from "react";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { Button } from "../Button/Button";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <WrapperSC>
        {/* <CircleSC /> */}
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

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 162px 100px 64px;
`;
export const ContainerWithTwoBlocksSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-gap: 140px;
`;

export const ContainerDescriptionSC = styled.div`
  padding: 56px 0;
  max-width: 568px;
  width: 100%;
`;
export const Block = styled.div`
  height: 432px;
  /* width: 493px; */
  background-color: #62626224;
`;
export const BlockImages = styled.div`
  height: 93px;
  background-color: #8c8c8c;
  margin-top: 56px;
`;

export const WrapperSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
export const MainContainerSC = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #0a2640;
  position: relative;
`;

export const CircleSC = styled.div`
  position: absolute;
  z-index: -2;
  opacity: 0.3;
  top: -1120px;
  right: 0px;
  left: 777px;
  top: -789px;
  width: 1293px;
  height: 1293px;
  border-radius: 50%;
  background: #1c3d5b;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  color: #ffffff;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #f1f1f1;

  margin-top: 16px;
`;

export const ContainerButtonsSC = styled.div`
  display: flex;
  column-gap: 24px;
  margin-top: 40px;
`;
