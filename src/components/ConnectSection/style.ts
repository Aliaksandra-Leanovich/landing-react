import styled from "@emotion/styled";
import { Colors, media } from "../../ui";
import { IPropsStyle } from "./types";

interface IProps {
  background: Colors;
  height: string;
  radius?: string;
}

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 120px;
`;
export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px;
`;

export const ContainerBlocksSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 150px;

  margin-bottom: 120px;

  ${media.LAPTOP} {
    grid-template-columns: 1fr;
    grid-gap: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;
export const ImageContainerSC = styled.div<IPropsStyle>`
  width: 494px;
  height: ${({ height }) => height};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
`;
export const ImageSC = styled.img`
  width: 100%;
`;

export const TextContainerSC = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const TitleContainerSC = styled.div`
  margin-top: 124px;
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

export const Block = styled.div`
  background-color: #bbbbbb;

  width: 500px;
  height: 252px;
`;
export const AdvantagesContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
export const AdvantageSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  max-width: 500px;
  width: 100%;
  height: 68px;
  padding: 0 20px;

  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  transition: stroke 0.5s ease-out, background-color 0.5s ease-out,
    color 0.5s ease-out;

  svg {
    path {
      stroke: #000;
    }
  }

  &:hover {
    background: #0a2640;

    p {
      color: #fff;
    }

    svg {
      path {
        stroke: #fff;
      }
    }
  }
`;

export const ContainerImageAndDiagramSC = styled.div`
  position: relative;
  max-width: 494px;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
`;

export const ContainerDiagramSC = styled.div`
  position: absolute;

  top: 210px;
  left: 180px;
  width: 251px;
  height: 388px;

  padding: 40px;

  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;
export const DiagramTopSC = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: flex-end;
  grid-gap: 12px;
`;
export const DiagramBottomSC = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 12px;
`;

export const DescriptionDiagramSC = styled.div`
  margin-top: 20px;
`;

export const Column = styled.div<IProps>`
  width: 12px;
  background-color: ${({ background }) => background};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
`;
