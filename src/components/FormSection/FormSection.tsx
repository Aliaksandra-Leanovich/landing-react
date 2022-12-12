import styled from "@emotion/styled";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { Colors } from "../../ui";
import { Button } from "../Button/Button";
import { Input } from "../Input";

export const FormSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <Title>An enterprise template to ramp up your company website</Title>
        <Form>
          <Input type="email" placeholder="Your email address" />
          <Button variant={ButtonVariants.secondary}>Start now</Button>
        </Form>
      </ContainerSC>
    </SectionSC>
  );
};

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

export const Title = styled.h3`
  text-align: center;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  color: #ffffff;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 24px;
`;
