import styled from "@emotion/styled";
import BackgroundImage from "../../assets/dropdownBackground.svg";
import { ReactComponent as DropdowmImage } from "../../assets/dropdownImage.svg";

interface IProps {
  background: string;
}

const config = [
  {
    title: "We connect our customers with the best?",
    description: "",
  },
  {
    title: "Android research & development rockstar? ",
    description: " ",
  },
];

export const DropdownSection = () => {
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
            {config.map((item) => (
              <DropdownSC>
                <DropdownTitleSC>{item.title}</DropdownTitleSC>
                <DropdowmImage />
              </DropdownSC>
            ))}
          </DropdownsContainerSC>
        </ContainerInformationSC>
      </ContainerSC>
    </SectionSC>
  );
};

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 124px 170px 0;
`;

export const ContainerImageSC = styled.div<IProps>`
  border-radius: 24px;
  max-width: 1100px;
  width: 100%;
  height: 403px;

  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContainerInformationSC = styled.div`
  display: flex;
  column-gap: 100px;

  margin-top: 56px;
`;
export const DescriptionSC = styled.p`
  font-size: 36px;
  line-height: 56px;
`;

export const DropdownsContainerSC = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
export const DescriptionBlockSC = styled.div`
  max-width: 500px;
  width: 100%;
`;
export const DropdownTitleSC = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

export const DropdownSC = styled.div`
  width: 100%;
  padding-bottom: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #c4c4c4;
`;
