import { BlogSection } from "../components/BlogSection/BlogSection";
import { DropdownSection } from "../components/DropdownSection/DropdownSection";
import { Footer } from "../components/Footer/Footer";
import { FormSection } from "../components/FormSection/FormSection";
import { Header } from "../components/Header/Header";
import { MainSection } from "../components/MainSection/MainSection";
import { ServicesSection } from "../components/SevicesSection/ServicesSection";
import { SliderSection } from "../components/SliderSection/SliderSection";

export const Home = () => {
  return (
    <>
      <Header />
      <MainSection />
      <ServicesSection />
      <SliderSection />
      <DropdownSection />
      <BlogSection />
      <FormSection />
      <Footer />
    </>
  );
};
