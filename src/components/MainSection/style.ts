import styled from "@emotion/styled";
import { media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 162px 100px 64px;
`;
export const ContainerWithTwoBlocksSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-gap: 140px;

  ${media.LAPTOP} {
    grid-template-columns: 1fr;
    grid-gap: 0;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const ContainerDescriptionSC = styled.div`
  padding: 56px 0;
  max-width: 568px;
  width: 100%;
`;
export const Block = styled.div`
  height: 432px;

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

export const DescriptionContainerSC = styled.div`
  margin-top: 16px;
`;

export const ContainerButtonsSC = styled.div`
  display: flex;
  column-gap: 24px;
  margin-top: 40px;
`;
