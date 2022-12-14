import { addDoc, collection } from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { db } from "../../utils/firebase";
import { Button } from "../Button";
import { ContainerInputSC, FormSC, Input } from "./style";

export const FormWithEmail = () => {
  const { register, handleSubmit, reset, getValues, control } = useForm();

  const addUser = async (email: string) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = () => {
    const { email } = getValues();
    addUser(email);
    reset();
  };

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputSC>
        <Controller
          name="email"
          control={control}
          render={() => (
            <Input
              type="email"
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
