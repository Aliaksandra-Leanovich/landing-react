import { useState } from "react";
import BackgroundImage from "../../assets/dropdownBackground.svg";
import { ReactComponent as DropdowmImage } from "../../assets/dropdownImage.svg";
import { VariantsTypography } from "../../enums/TypographyVariants";
import Typography from "../../ui/Typography";
import {
  ContainerImageSC,
  ContainerInformationSC,
  ContainerSC,
  DescriptionBlockSC,
  DropdownButtonSC,
  DropdownContainerSC,
  DropdownDescriptionSC,
  DropdownSC,
  DropdownsContainerSC,
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
            <Typography variant={VariantsTypography.h3}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Typography>
          </DescriptionBlockSC>

          <DropdownsContainerSC>
            {config.map((item, index) => (
              <DropdownContainerSC>
                <DropdownSC key={index}>
                  <Typography variant={VariantsTypography.paragraphS}>
                    {item.title}
                  </Typography>
                  <DropdownButtonSC onClick={handleClick} isOpen={isOpen}>
                    {item.image}
                  </DropdownButtonSC>
                </DropdownSC>
                <DropdownDescriptionSC isOpen={isOpen}>
                  <Typography variant={VariantsTypography.paragraphXS}>
                    {item.description}
                  </Typography>
                </DropdownDescriptionSC>
              </DropdownContainerSC>
            ))}
          </DropdownsContainerSC>
        </ContainerInformationSC>
      </ContainerSC>
    </SectionSC>
  );
};
