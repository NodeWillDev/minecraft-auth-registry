import * as S from "./styled";
import React, { HTMLInputTypeAttribute } from "react";

interface IInput {
  label: string,
  icon: JSX.Element,
  required: boolean,
  placeholder: string,
  type: HTMLInputTypeAttribute,
  input_ref: React.RefObject<HTMLInputElement>,
}

const Input = ({ label, icon, required, input_ref, placeholder, type }: IInput) => {

  return <>
    <S.Container >
      <S.Input  type={type} placeholder={placeholder} ref={input_ref} required={required} />      
      <S.Label >
        {label}
      </S.Label>
      <S.Icon>
        {icon}
      </S.Icon>
    </S.Container>
  </>
}

export default Input