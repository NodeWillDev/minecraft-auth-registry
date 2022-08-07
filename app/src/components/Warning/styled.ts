import styled, { keyframes } from "styled-components";
import { IStyled } from "./interface/IStyled";

const AnimationWarning = keyframes`
  10% {
    top: 0px;
  }
  80% {
    top: 0px;
  }
  100% {
    top: -100vh;
  }
`

export const Container = styled.div<IStyled>`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -100vh;
  width: 400px;
  max-width: 400px;
  z-index: 100;
  padding: 20px;
  background-color: #f1eeee;
  box-shadow: 3px 5px 20px black;
  backdrop-filter: blur(5px);
  color: black;
  letter-spacing: 1.2px;
  line-height: 15px;
  font-size: 1.4rem;
  text-align: center;
  animation: ${props => props.show ? AnimationWarning : 'none'} ${props => props.time}s linear; 
`

export const Title = styled.h2<Omit<IStyled, 'show' | 'time'>>`
  color: ${props => props.title_color ?? '#fff'};
  margin-bottom: 15px;
  letter-spacing: 3.5px;
`

export const Icon = styled.div<Omit<IStyled, 'show' | 'time'>>`
  font-size: 2rem;
  height: 25px;  
  margin-top: -10px;
  position: relative;
  > svg{
    color: ${props => props.title_color ?? 'red'};
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`