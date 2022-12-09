import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Colors } from "../../ui";
import { Logo } from "../Logo/Logo";

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

export const StyledFooterSC = styled.footer`
  width: 100%;
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 100px;
`;
export const ContainerSC = styled.div`
  display: flex;
  column-gap: 180px;
`;

export const BlockWithLogoSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  max-width: 300px;
  width: 100%;
`;
export const BlockWithLinksSC = styled.div`
  display: flex;
  column-gap: 96px;
`;

export const SubcategorydLinkSC = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  color: #777777;
`;
export const CategoryLinkSC = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  cursor: pointer;
`;
export const LinksSC = styled.div`
  display: flex;
  width: 150px;
  /* width: 100%; */
  flex-direction: column;
  row-gap: 32px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #777777;
`;

export const RightsSC = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #777777;

  margin-top: 24px;
`;

export const LabelSC = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 28px;

  color: #0a2640;

  background: #65e4a3;
  border-radius: 120px;
  padding: 4px 14px;
  margin-left: 16px;
`;

export const ContainerLinkSC = styled.div`
  display: flex;
`;
