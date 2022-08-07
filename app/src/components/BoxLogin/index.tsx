import Input from "../Input";
import * as S from "./styled";
import { FaMailBulk, FaUserLock } from "react-icons/fa"
import { useRef, useState } from "react";
import Button from "../Button";
import { IWarning } from "../Warning/interface/IWarning";
import nameExists from "../../functions/user/nameExists";
import { WARNING_FALIED, WARNING_SUCCESS } from "../../globals/styles/warning/colors";
import Warning from "../Warning";
import useAuth from "../../context/Auth/hook/useAuth";
import { useNavigate } from "react-router-dom";

interface IBoxLogin {
  title: string
}

const BoxLogin = ({ title }: IBoxLogin) => {

  const navigate = useNavigate();

  const input_key = useRef<HTMLInputElement>(null);
  const input_password = useRef<HTMLInputElement>(null)

  const [warning, setWarning] = useState<IWarning>({
    title: 'Warning',
    message: '',
    show: false,
    state: () => { },
    time: 4,
  });

  const { signIn, isLoaded } = useAuth();

  async function checkInputs() {
    if (input_key.current?.value && input_password.current?.value) {

      await signIn({
        key: input_key.current.value,
        password: input_password.current.value
      });

      if (!isLoaded()) {
        return setWarning({
          ...warning,
          message: 'Email, Name or Nick not exists, please insert a fields valid',
          show: true,
          title_color: WARNING_FALIED,
        });
      }else{
        navigate('/home');
      }
    } else {
      return setWarning({
        ...warning,
        message: 'Some fields were not filled.',
        show: true,
        title_color: WARNING_FALIED
      })
    }
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
      <S.Title>
        <h2>{title}</h2>
      </S.Title>

      <S.Date>
        <Input
          icon={<FaMailBulk />}
          label="Name"
          placeholder="Name, Nick or Email"
          required={false}
          input_ref={input_key}
          type="text"
        />
        <Input
          icon={<FaUserLock />}
          label="Password"
          placeholder="Password"
          required={false}
          input_ref={input_password}
          type="password"
        />
        <S.ForgetPassword>
          <p>Forget Password? <a href="#">Click here</a></p>
        </S.ForgetPassword>
        <Button
          clickable={!warning.show}
          size={12}
          onClick={checkInputs}
          title="SIGN IN"
        />
      </S.Date>
    </S.Container>
  </>
}

export default BoxLogin