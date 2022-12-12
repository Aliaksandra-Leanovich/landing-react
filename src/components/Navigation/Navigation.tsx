import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { Button, ContainerSC, LinkSC } from "./style";

const config = [
  {
    href: "#",
    title: "Product",
  },
  {
    href: "#",
    title: "Services",
  },

  {
    href: "#",
    title: "About",
  },
];

export const Navigation = () => {
  return (
    <ContainerSC>
      {config.map((item) => (
        <LinkSC href={item.href}>
          <Typography
            variant={VariantsTypography.paragraphXSBold}
            color={Colors.INFOLIGHT}
          >
            {item.title}
          </Typography>
        </LinkSC>
      ))}

      <Button
        // handleClick={handleClick}
        type="submit"
      >
        Log in
      </Button>
    </ContainerSC>
  );
};
