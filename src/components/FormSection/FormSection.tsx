import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { ButtonVariants, TypographyVariants } from "../../enums";
import { validationSchema } from "../../helper";
import { Colors, Typography } from "../../ui";
import { db } from "../../utils/firebase";
import { Button } from "../Button";

import {
  ContainerInputSC,
  ContainerSC,
  FormSC,
  Input,
  SectionSC,
} from "./style";
import { IUserForm } from "./types";

export const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors },
  } = useForm();

  const addUser = async (email: string) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        user: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };
  const onSubmit = () => {
    const { email } = getValues();
    console.log(email);
    addUser(email);
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
                  // label="email"
                  // onChange={onChange}
                  value={value}
                  // errors={errors.email?.message}
                  {...register("email")}
                  placeholder="Enter your email"
                />
              )}
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
