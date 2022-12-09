import styled from "@emotion/styled";
import React from "react";

export const DropdownSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <ContainerImageSC></ContainerImageSC>

        <ContainerInformationSC>
          <DescriptionBlock>
            <Description>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Description>
          </DescriptionBlock>

          <DropdownsSC></DropdownsSC>
        </ContainerInformationSC>
      </ContainerSC>
    </SectionSC>
  );
};

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerSC = styled.div`
  max-width: 1920px;
  width: 100%;

  padding: 124px 170px 0;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

export const ContainerImageSC = styled.div`
  border-radius: 24px;
  width: 1100px;
  height: 403px;

  background-color: #7e7e7e24;
`;

export const ContainerInformationSC = styled.div`
  display: flex;
  column-gap: 100px;

  margin-top: 56px;
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 36px;
  line-height: 56px;
`;

export const DropdownsSC = styled.div`
  width: 500px;
  height: 140px;
  background-color: #a1a1a168;
`;
export const DescriptionBlock = styled.div`
  max-width: 500px;
  width: 100%;
`;
