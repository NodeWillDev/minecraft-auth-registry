import Input from "../Input";
import * as S from "./styled";
import { FaMailBulk, FaUserLock, FaLock, FaUserCircle } from "react-icons/fa"
import { useRef, useState } from "react";
import Button from "../Button";
import nameExists from "../../functions/user/nameExists";
import emailExists from "../../functions/user/emailExists";
import { IWarning } from "../Warning/interface/IWarning";
import Warning from "../Warning";
import createUser from "../../functions/user/createUser";
import { WARNING_FALIED, WARNING_SUCCESS } from "../../globals/styles/warning/colors";
import nickExists from "../../functions/user/nickExists";

interface IBoxRegistry {
  title: string
}

const BoxRegistry = ({ title }: IBoxRegistry) => {

  const input_name = useRef<HTMLInputElement>(null);
  const input_nick = useRef<HTMLInputElement>(null);
  const input_email = useRef<HTMLInputElement>(null);
  const input_password = useRef<HTMLInputElement>(null);
  const input_checked = useRef<HTMLInputElement>(null);

  const [warning, setWarning] = useState<IWarning>({
    title: 'Warning',
    message: '',
    show: false,
    state: () => { },
    time: 5,
    title_color: WARNING_FALIED,
  });


  //This functions not recommend for the production, This function is for exhibition
  async function checkInputs() {

    if (input_email.current?.value
      && input_nick.current?.value
      && input_password.current?.value
      && input_checked.current?.value
      && input_name.current?.value
    ) {

      if (input_password.current.value !== input_checked.current.value) {
        return setWarning({
          ...warning,
          message: 'Passwords are not the same.',
          show: true,
          title_color: WARNING_FALIED,
        })
      }

      if (await emailExists(input_email.current.value)
        || await nameExists(input_name.current.value)
        || await nickExists(input_nick.current.value)) {
        return setWarning({
          ...warning,
          message: 'Email, Name or Nick already exists.',
          show: true,
          title_color: WARNING_FALIED
        })
      }

    } else {
      return setWarning({
        ...warning,
        message: 'Some fields were not filled.',
        show: true,
        title_color: WARNING_FALIED
      })
    }

    await createUser({
      email: input_email.current.value,
      nick: input_nick.current.value,
      name: input_name.current.value,
      password: input_password.current.value,

    });


    return setWarning({
      ...warning,
      show: true,
      message: 'Account created successfully, now please login',
      title_color: WARNING_SUCCESS
    })
  }

  return <>
    <S.Container>
      <Warning
        title={warning.title}
        message={warning.message}
        show={warning.show}
        time={warning.time}
        title_color={warning.title_color}
        state={setWarning}
      />
      <S.Title >
        <h2>{title}</h2>
      </S.Title>

      <S.Date>
        <Input
          icon={<FaUserCircle />}
          label="Name"
          placeholder="Name"
          required={true}
          input_ref={input_name}
          type="text"
        />
        <Input
          icon={<FaMailBulk />}
          label="Nick"
          placeholder="Nick"
          required={true}
          input_ref={input_nick}
          type="text"
        />
        <Input
          icon={<FaUserLock />}
          label="Email"
          placeholder="Email"
          required={true}
          input_ref={input_email}
          type="email"
        />
        <Input
          icon={<FaLock />}
          label="Password"
          placeholder="Password"
          required={true}
          input_ref={input_password}
          type="password"
        />
        <Input
          icon={<FaLock />}
          label="Repeat Password"
          placeholder="Repeat Password"
          required={true}
          input_ref={input_checked}
          type="password"
        />
        <S.ButtonStyled>
          <Button
            size={12}
            clickable={!warning.show}
            onClick={checkInputs}
            title="SIGN UP"
          />
        </S.ButtonStyled>
      </S.Date>

    </S.Container>
  </>
}

export default BoxRegistry