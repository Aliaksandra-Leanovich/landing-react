import styled from "@emotion/styled";
import { media } from "../../ui";

interface IPropsButton {
  display: string;
}

interface IProps {
  background?: string;
}

export const TitleSC = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
  text-align: center;
`;
export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 158px;
`;
export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  text-align: center;
  margin-top: 12px;
`;
export const ContainerOfBlocksSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);

  justify-content: center;

  column-gap: 100px;
  row-gap: 80px;
  width: 100%;
  margin-top: 80px;

  ${media.TABLET} {
    grid-template-columns: 1fr;
    column-gap: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
  }
`;

export const ImageSC = styled.div<IProps>`
  width: 100%;
  max-width: 300px;
  height: 209px;

  border-radius: 12px;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;

export const BlockSC = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  justify-content: space-between;
`;

export const CategoryBlockSC = styled.div`
  display: flex;
  column-gap: 12px;

  margin-top: 24px;
`;

export const Category = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;

  color: #0a2640;
`;
export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #777777;
`;
export const Descripion = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  margin-top: 12px;
`;
export const AuthorInformation = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  margin-top: 20px;
`;
export const Name = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`;

export const LinkSC = styled.button<IPropsButton>`
  margin-top: 84px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  color: #0a2640;
  padding: 16px 56px;

  border: 2px solid #0a2640;
  border-radius: 56px;
  display: ${({ display }) => display};
`;
export const AuthorImageSC = styled.div<IProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;
