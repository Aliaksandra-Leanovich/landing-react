import { Colors } from "../../ui";
import { Logo } from "../Logo/Logo";
import {
  BlockWithLinksSC,
  BlockWithLogoSC,
  CategoryLinkSC,
  ContainerLinkSC,
  ContainerSC,
  Description,
  LabelSC,
  LinksSC,
  RightsSC,
  StyledFooterSC,
  SubcategorydLinkSC,
  WrapperSC,
} from "./styles";

const config = [
  {
    category: "Landings",
    link: "#",
    subcategories: [
      { name: "Home", link: "#" },
      { name: "Products", link: "#" },
      { name: " Services", link: "#" },
    ],
  },
  {
    category: "Company",
    link: "#",
    subcategories: [
      { name: "Home", link: "#" },
      { name: "Careers", link: "#", label: "Hiring!" },
      { name: "Services", link: "#" },
    ],
  },
  {
    category: "Resources",
    link: "#",
    subcategories: [
      { name: "Blog", link: "#" },
      { name: "Products", link: "#" },
      { name: "Services", link: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <StyledFooterSC>
      <WrapperSC>
        <ContainerSC>
          <BlockWithLogoSC>
            <Logo color={Colors.PRIMARY} background={Colors.PRIMARY} />
            <Description>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </Description>
            <RightsSC>All rights reserved.</RightsSC>
          </BlockWithLogoSC>
          <BlockWithLinksSC>
            {config.map((category, index) => (
              <LinksSC key={index}>
                <a href={category.link} key={index}>
                  <CategoryLinkSC>{category.category}</CategoryLinkSC>
                </a>
                {category.subcategories.map((subcategory, index) => (
                  <ContainerLinkSC key={index}>
                    <SubcategorydLinkSC>{subcategory.name}</SubcategorydLinkSC>
                    {subcategory.label && (
                      <LabelSC>{subcategory.label}</LabelSC>
                    )}
                  </ContainerLinkSC>
                ))}
              </LinksSC>
            ))}
          </BlockWithLinksSC>
        </ContainerSC>
      </WrapperSC>
    </StyledFooterSC>
  );
};
