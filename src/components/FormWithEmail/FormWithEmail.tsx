import { addDoc, collection } from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { db } from "../../utils/firebase";
import { Button } from "../Button";
import { ContainerInputSC, FormSC, Input } from "./style";

export const FormWithEmail = () => {
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

      <Button variant={ButtonVariants.primaryGreenLarge}>Start now</Button>
    </FormSC>
  );
};
