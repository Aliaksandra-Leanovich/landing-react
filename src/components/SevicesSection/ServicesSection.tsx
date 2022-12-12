import styled from "@emotion/styled";
import { ConnectSection } from "../ConnectSection/ConnectSection";
import { ExploreSection } from "../ExploreSection/ExploreSection";

export const ServicesSection = () => {
  return (
    <SectionSC>
      <WrapperSC>
        <Title> Our Services</Title>
        <ExploreSection />
        <ConnectSection />
      </WrapperSC>
    </SectionSC>
  );
};

export const WrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SectionSC = styled.section`
  padding: 84px 0 0;

  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
`;
