import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 40px;
`;

export const LinkSC = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${Colors.INFOLIGHT};
  cursor: pointer;

  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.INFOLIGHT};
  }
`;
