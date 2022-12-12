import { useState } from "react";
import BackgroundImage from "../../assets/dropdownBackground.svg";
import { ReactComponent as DropdowmImage } from "../../assets/dropdownImage.svg";
import {
  ContainerImageSC,
  ContainerInformationSC,
  ContainerSC,
  DescriptionBlockSC,
  DescriptionSC,
  DropdownButtonSC,
  DropdownContainerSC,
  DropdownDescriptionSC,
  DropdownSC,
  DropdownsContainerSC,
  DropdownTitleSC,
  SectionSC,
} from "./style";

const config = [
  {
    title: "We connect our customers with the best?",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    image: <DropdowmImage />,
  },
  {
    title: "Android research & development rockstar? ",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  ",
    image: <DropdowmImage />,
  },
];

export const DropdownSection = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <SectionSC>
      <ContainerSC>
        <ContainerImageSC background={BackgroundImage} />

        <ContainerInformationSC>
          <DescriptionBlockSC>
            <DescriptionSC>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </DescriptionSC>
          </DescriptionBlockSC>

          <DropdownsContainerSC>
            {config.map((item, index) => (
              <DropdownContainerSC>
                <DropdownSC key={index}>
                  <DropdownTitleSC>{item.title}</DropdownTitleSC>
                  <DropdownButtonSC onClick={handleClick} isOpen={isOpen}>
                    {item.image}
                  </DropdownButtonSC>
                </DropdownSC>
                <DropdownDescriptionSC isOpen={isOpen}>
                  {item.description}
                </DropdownDescriptionSC>
              </DropdownContainerSC>
            ))}
          </DropdownsContainerSC>
        </ContainerInformationSC>
      </ContainerSC>
    </SectionSC>
  );
};
