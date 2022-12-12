import styled from "@emotion/styled";
import { BlogSection } from "./components/BlogSection/BlogSection";
import { DropdownSection } from "./components/DropdownSection/DropdownSection";
import { Footer } from "./components/Footer/Footer";
import { FormSection } from "./components/FormSection/FormSection";
import { Header } from "./components/Header/Header";
import { MainSection } from "./components/MainSection/MainSection";
import { ServicesSection } from "./components/SevicesSection/ServicesSection";
import { SliderSection } from "./components/SliderSection/SliderSection";

function App() {
  return (
    <WrapperSC>
      <ContainerSC>
        <Header />
        <MainSection />
        <ServicesSection />
        <SliderSection />
        <DropdownSection />
        <BlogSection />
        <FormSection />
        <Footer />
      </ContainerSC>
    </WrapperSC>
  );
}

export default App;

const ContainerSC = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const WrapperSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
