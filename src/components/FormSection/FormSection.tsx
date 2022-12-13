import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ButtonVariants, TypographyVariants } from "../../enums";
import { validationSchema } from "../../helper";
import { Colors, Typography } from "../../ui";
import { Button } from "../Button";
import { Input } from "../Input";
import { IUserForm } from "./types";
import { ContainerInputSC, ContainerSC, FormSC, SectionSC } from "./style";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const FormSection = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    getValues,
    control,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const [email, setEmail] = useState("");
  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        user: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const onSubmit = () => {
    addTodo();
  };

  return (
    <SectionSC>
      <ContainerSC>
        <Typography variant={TypographyVariants.h3} color={Colors.INFOLIGHT}>
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
                  onChange={(e) => setEmail(e.target.value)}
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
