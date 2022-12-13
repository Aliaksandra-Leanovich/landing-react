import { ButtonVariants } from "../../enums/ButtonVariants";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { Button } from "../Button/Button";
import { Input } from "../Input";
import { ContainerSC, FormSC, SectionSC } from "./style";

export const FormSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        {/* <CircleSC /> */}
        <Typography variant={VariantsTypography.h3} color={Colors.INFOLIGHT}>
          An enterprise template to ramp up your company website
        </Typography>
        <FormSC>
          <Input type="email" placeholder="Your email address" />
          <Button variant={ButtonVariants.secondary}>Start now</Button>
        </FormSC>
      </ContainerSC>
    </SectionSC>
  );
};
