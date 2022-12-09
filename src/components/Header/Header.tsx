import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../ui";
import { Logo } from "../Logo/Logo";

import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <Logo background={Colors.SECONDARY} color={Colors.INFOLIGHT} />
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
  background-color: ${Colors.PRIMARY};
`;
export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 100px 26px;
`;
export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
