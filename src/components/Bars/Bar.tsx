import { BarCircle } from "./BarCircle";
import { BarGorizontal } from "./BarGorizontal";
import { BarVertical } from "./BarVertical";
import { BarsBottomSC, StyledBarsSC } from "./style";

export const Bar = () => {
  return (
    <StyledBarsSC>
      <BarGorizontal />
      <BarsBottomSC>
        <BarVertical />
        <BarCircle />
      </BarsBottomSC>
    </StyledBarsSC>
  );
};
