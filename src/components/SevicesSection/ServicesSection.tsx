import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { ConnectSection } from "../ConnectSection/ConnectSection";
import { ExploreSection } from "../ExploreSection/ExploreSection";
import { SectionSC, WrapperSC } from "./style";

export const ServicesSection = () => {
  return (
    <SectionSC>
      <WrapperSC>
        <Typography variant={VariantsTypography.paragraphS} color={Colors.GRAY}>
          {" "}
          Our Services
        </Typography>
        <ExploreSection />
        <ConnectSection />
      </WrapperSC>
    </SectionSC>
  );
};
