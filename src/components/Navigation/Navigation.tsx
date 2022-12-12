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
        <LinkSC href={item.href}>{item.title}</LinkSC>
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
