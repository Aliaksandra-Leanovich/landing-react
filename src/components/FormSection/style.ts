import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 124px;
`;
export const ContainerSC = styled.div`
  max-width: 1250px;
  width: 100%;

  padding: 72px 100px;

  background-color: ${Colors.PRIMARY};
  border-radius: 12px;
`;

export const FormSC = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 24px;
`;
