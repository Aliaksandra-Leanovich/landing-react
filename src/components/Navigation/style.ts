import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
`;
export const Button = styled.button`
  padding: 8px 40px;
  background: ${Colors.INFOLIGHT};

  border-radius: 24px;
  font-weight: 700;
  line-height: 24px;

  color: #0a2640;
`;

export const LinkSC = styled.a`
  font-family: "Open Sans";

  font-weight: 600;
  line-height: 28px;

  color: ${Colors.INFOLIGHT};

  cursor: pointer;
  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.INFOLIGHT};
  }
`;
