import { LinkVariants, TypographyVariants } from "../../enums";
import { routes } from "../../routes";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import { ContainerSC, LinkSC } from "./style";

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
            variant={TypographyVariants.paragraphXSBold}
            color={Colors.INFOLIGHT}
          >
            {item.title}
          </Typography>
        </LinkSC>
      ))}

      <Link to={routes.LOGIN} variant={LinkVariants.primaryWhiteSmall}>
        Log in
      </Link>
    </ContainerSC>
  );
};
