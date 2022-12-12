import { Colors } from "../../ui";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { ContainerSC, StyledHeaderSC, WrapperSC } from "./style";

export const Header = () => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <Logo background={Colors.SECONDARY} color={Colors.INFOLIGHT} />
          <Navigation />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
