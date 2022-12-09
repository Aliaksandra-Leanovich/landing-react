import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../ui";

export interface IProps {
  color?: Colors;
  background?: Colors;
}

export const Logo = ({ color, background }: IProps) => {
  return (
    <LogoSC>
      <RectanglesSC>
        <SmallRectangleSC background={background} />
        <BigRectangleSC background={background} />
      </RectanglesSC>

      <Text color={color}>Boldo</Text>
    </LogoSC>
  );
};

export const LogoSC = styled.div<IProps>`
  display: flex;
  column-gap: 10px;
`;
export const RectanglesSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const SmallRectangleSC = styled.div<IProps>`
  width: 18px;
  height: 14px;
  border-radius: 0px 12px 12px 0px;
  background-color: ${({ background }) => background};
`;
export const BigRectangleSC = styled.div<IProps>`
  width: 24px;
  height: 18px;
  border-radius: 0px 12px 12px 0px;
  background-color: ${({ background }) => background};
`;
export const Text = styled.p<IProps>`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 44px;
  line-height: 34px;
`;
