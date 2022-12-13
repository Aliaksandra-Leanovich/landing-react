import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { Colors } from "../../ui";
import { IButton } from "./types";

const variantStyles = (variant = ButtonVariants.primary) =>
  ({
    primary: css`
      background-color: ${Colors.PRIMARY};
      border: 2px solid ${Colors.PRIMARY};
      color: ${Colors.INFOLIGHT};
    `,
    secondary: css`
      background-color: ${Colors.SECONDARY};
      border: 2px solid ${Colors.SECONDARY};
      color: ${Colors.PRIMARY};
    `,
    primaryWithBorder: css`
      background-color: ${Colors.PRIMARY};
      border: 2px solid ${Colors.INFOLIGHT};
      color: ${Colors.INFOLIGHT};
    `,
  }[variant]);

export const ButtonSC = styled.button<Pick<IButton, "variant">>`
  ${({ variant }) => variantStyles(variant)}

  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  border-radius: 56px;

  padding: 16px 56px;

  transition: background-color 0.5s ease-out, border-color 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
    border-color: transparent;
  }
`;
