import { IWarning } from "./interface/IWarning";
import { VscChromeClose } from "react-icons/vsc"
import * as S from "./styled";
import { useRef } from "react";

const Warning = ({ message, show, time, state, title, title_color }: IWarning) => {

  const box_ref = useRef<HTMLDivElement>(null);

  function animationEnd() {

    if (box_ref.current) {      

      box_ref.current.getAnimations().forEach(data => {
        data.currentTime = ((time * 80) / 100) * 1000;
      })
    }
  }

  return <>
    <S.Container ref={box_ref} onAnimationEnd={() => {      
      state({
        title,
        message,
        time,
        state,
        title_color,
        show: false,
      });
    }}
      show={show}
      time={time}
      title_color={title_color}
    >
      <S.Icon title_color={title_color} >
        <VscChromeClose onClick={animationEnd} />
      </S.Icon>
      <S.Title title_color={title_color} >{title}</S.Title>
      {message}
    </S.Container>
  </>

}

export default Warning