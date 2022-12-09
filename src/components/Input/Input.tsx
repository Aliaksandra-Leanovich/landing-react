import React, { InputHTMLAttributes } from "react";
import { StyledInputSC } from "./style";

export const Input = ({
  type,
  placeholder,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInputSC type={type} placeholder={placeholder} />;
};
