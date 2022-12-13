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
  position: relative;
`;
export const ContainerInputSC = styled.div`
  max-width: 370px;
  width: 100%;
`;
export const FormSC = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 24px;
`;
// export const CircleSC = styled.div`
//   position: absolute;
//   display: block;

//   opacity: 0.3;
//   top: -1120px;
//   right: 0px;
//   left: 777px;
//   top: -789px;
//   width: 1293px;
//   height: 1293px;
//   border-radius: 50%;
//   background: #1c3d5b;
// `;
