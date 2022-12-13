import React, { useState } from "react";
import { VariantsTypography } from "../../enums/TypographyVariants";
import Typography from "../../ui/Typography";
import {
  DropdownButtonSC,
  DropdownContainerSC,
  DropdownDescriptionSC,
  DropdownSC,
} from "./style";

export const DropdownItem = ({ item }: any) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <DropdownContainerSC>
      <DropdownSC>
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
  );
};
