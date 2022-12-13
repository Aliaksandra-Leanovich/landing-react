import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const StyledFormSC = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  margin: 20px 0;
  width: 100%;
  max-width: 600px;

  padding: 50px;

  border-radius: 16px;
  position: relative;
`;

export const ContainerFormSC = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.PRIMARY};
`;
