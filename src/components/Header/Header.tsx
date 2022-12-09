import styled from "@emotion/styled";
import React from "react";

import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <Logo></Logo>
          <Navigation />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};

export const StyledHeaderSC = styled.header`
  width: 100%;
  z-index: 2;
  /* top: 0;
  left: 0; */
  position: fixed;
  background-attachment: fixed;
  background-position: top center;
`;
export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 100px;
`;
export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 162px;
  height: 42px;
  background-color: beige;
`;
