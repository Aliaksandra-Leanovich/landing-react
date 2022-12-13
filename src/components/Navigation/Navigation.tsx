import { VariantsTypography } from "../../enums/TypographyVariants";
import { routes } from "../../routes";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { Link, ContainerSC, LinkSC } from "./style";

const config = [
  {
    href: "#product",
    title: "Product",
  },
  {
    href: "#services",
    title: "Services",
  },

  {
    href: "#blog",
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

      <Link href={routes.LOGIN}>Log in</Link>
    </ContainerSC>
  );
};
