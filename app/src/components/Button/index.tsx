import { useRef, useState } from "react";
import * as S from "./styled"
import { FaCheck } from "react-icons/fa"
import { IStyled } from "./interfaces/IStyled";

interface IButton extends IStyled {
  title: string,
  onClick: () => void
}

const Button = ({ onClick, title, size, clickable }: IButton) => {

  const icon_ref = useRef<HTMLDivElement>(null)
  const title_ref = useRef<HTMLDivElement>(null)


  function mouseButtonEnter() {
    if (title_ref.current && icon_ref.current) {
      title_ref.current.style.fontSize = "0px";
      icon_ref.current.style.fontSize = `${size}px`;
    }
  }

  function mouseButtonLeave() {
    if (title_ref.current && icon_ref.current) {
      title_ref.current.style.fontSize = `${size}px`;
      icon_ref.current.style.fontSize = "0px";
    }
  }

  return <>
    <S.Container clickable={clickable} size={size} >
      <button
        onMouseEnter={mouseButtonEnter}
        onMouseLeave={mouseButtonLeave}
        onClick={() => {
          if (clickable)
            onClick()
        }}
      >
        <div ref={title_ref} className="title" >
          {title}
        </div>
        <div ref={icon_ref} className="icon" >
          <FaCheck />
        </div>
      </button>
    </S.Container>
  </>
}

export default Button