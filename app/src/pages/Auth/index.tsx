import * as S from './styled';
import { useEffect, useRef } from "react";
import BoxLogin from '../../components/BoxLogin';
import BoxRegistry from '../../components/BoxRegistry';
import { FaDoorOpen } from 'react-icons/fa';
import { IoIosLogIn } from 'react-icons/io'
import useAuth from '../../context/Auth/hook/useAuth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

  const box_login = useRef<HTMLDivElement>(null);
  const box_registry = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded())
      navigate('/home')
  }, [])

  function changeBox() {
    if (box_login.current && box_registry.current) {
      if (box_login.current.classList[1]) {
        box_registry.current.classList.add('activated')
        box_login.current.classList.remove('activated')
      } else {
        box_login.current.classList.add('activated')
        box_registry.current.classList.remove('activated')
      }
    }
  }

  return (
    <>
      <br />

      <S.Container>
        <S.Box >

          <div ref={box_login} className="login activated" >
            <BoxLogin title="SIGN IN" />
          </div>

          <div ref={box_registry} className="registry" >
            <BoxRegistry title="SIGN UP" />
          </div>

        </S.Box>
        <S.ChangeForm>
          <S.ChangeFormToRegistry>
            <p>Click the button below to login.</p>
            <button>
              < FaDoorOpen onClick={changeBox} />
            </button>
          </S.ChangeFormToRegistry>
          <S.ChangeFormToLogin>
            <p>Are you already registered? then click the button below to login.</p>
            <button>
              < IoIosLogIn onClick={changeBox} />
            </button>
          </S.ChangeFormToLogin>
        </S.ChangeForm>
      </S.Container>

    </>
  );
}

export default Auth;