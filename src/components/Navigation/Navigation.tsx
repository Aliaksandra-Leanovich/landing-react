import { LinkVariants } from "../../enums";
import { routes } from "../../routes";
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
      {config.map((item, index) => (
        <LinkSC href={item.href} key={index}>
          {item.title}
        </LinkSC>
      ))}

      <Link to={routes.LOGIN} variant={LinkVariants.primaryWhiteSmall}>
        Log in
      </Link>
    </ContainerSC>
  );
};
