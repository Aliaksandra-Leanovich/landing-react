import styled from "@emotion/styled";

export const ContainerInputSC = styled.div`
  max-width: 370px;
  width: 100%;
`;

export const FormSC = styled.form`
  display: flex;
  justify-content: center;

  column-gap: 24px;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  padding: 12px 32px;
  width: 100%;

  border: 2px solid #ffffff;
  border-radius: 240px;

  &:focus {
    outline: none;
  }
`;
