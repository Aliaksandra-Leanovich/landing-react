import { useForm, Controller } from "react-hook-form";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui";
import Typography from "../../ui/Typography";
import { Button } from "../Button/Button";
import { Input } from "../Input";
import { IUserForm } from "../types";
import { ContainerInputSC, ContainerSC, FormSC, SectionSC } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../helper";
import { useState } from "react";

export const FormSection = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {};

  return (
    <SectionSC>
      <ContainerSC>
        {/* <CircleSC /> */}
        <Typography variant={VariantsTypography.h3} color={Colors.INFOLIGHT}>
          An enterprise template to ramp up your company website
        </Typography>
        <FormSC onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputSC>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="email"
                  label="email"
                  value={value}
                  onChange={onChange}
                  errors={errors.email?.message}
                  register={register}
                  placeholder="Enter your email"
                />
              )}
              rules={{
                required: false,
                onChange: () => {
                  if (errors) {
                    clearErrors("email");
                  }
                },
              }}
            />
          </ContainerInputSC>

          <Button variant={ButtonVariants.secondary} type="submit">
            Start now
          </Button>
        </FormSC>
      </ContainerSC>
    </SectionSC>
  );
};
