import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { db } from "../../utils/firebase";
import { Button } from "../Button";
import { ContainerInputSC, ErrorMessageSC, FormSC, Input } from "./style";

export const FormWithEmail = () => {
  const { register, handleSubmit, reset, getValues, control } = useForm();

  const [message, setMessage] = useState("");

  const addUser = async (email: string) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
      });
      setMessage("Thank you!");
      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      setMessage("Something went wrong... Please try again");
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = () => {
    const { email } = getValues();
    addUser(email);
    reset();
  };
  const handleChage = () => {
    setMessage("");
  };

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputSC>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
            />
          )}
        />
        {/* {message && <ErrorMessageSC> {message}</ErrorMessageSC>} */}
      </ContainerInputSC>

      <Button variant={ButtonVariants.primaryGreenLarge}>Start now</Button>
    </FormSC>
  );
};
