import styled from "@emotion/styled";
import React from "react";

export const Navigation = () => {
  return (
    <ContainerSC>
      <Link>Product</Link>
      <Link>Services</Link>
      <Link>About</Link>
      <Button
        // handleClick={handleClick}
        type="submit"
      >
        Log in
      </Button>
    </ContainerSC>
  );
};

export const ContainerSC = styled.div`
  display: flex;
  column-gap: 40px;
`;
export const Button = styled.button`
  padding: 8px 40px;
  background: #ffffff;

  border-radius: 24px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #0a2640;
`;

export const Link = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  color: #ffffff;
`;
