import styled from "@emotion/styled";
import "./App.css";
import { ConnectSection } from "./components/ConnectSection/ConnectSection";
import { Header } from "./components/Header/Header";
import { MainSection } from "./components/MainSection/MainSection";
import { ServicesSection } from "./components/SevicesSection/ServicesSection";

function App() {
  return (
    <WrapperSC>
      <ContainerSC>
        <Header />
        <MainSection />
        <ServicesSection />
        <ConnectSection />
      </ContainerSC>
    </WrapperSC>
  );
}

export default App;

const ContainerSC = styled.div`
  /* max-width: 1920px; */
  width: 100%;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  /* padding: 0 100px; */
`;
const WrapperSC = styled.div`
  /* max-width: 1920px;
  width: 100%;
  margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 0 100px; */
`;
