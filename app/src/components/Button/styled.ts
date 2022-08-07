import styled from "styled-components";
import { IStyled } from "./interfaces/IStyled";

export const Container = styled.div<IStyled>`
  
  padding: 7px;

  > button {
    border: none;
    background-color: rgba(255, 255, 255, .15);
    padding: 15px;
    letter-spacing: 3.5px;

    min-width: 80px;
    height: 40px;
    max-height: 40px;

    transition: .9s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
      background-color: ${props => props.clickable ? '#0cff7cb1' : '#cf1000'};
    }

    > div {
      position: absolute;
      transition: .8s;    
    }
  }
  .title {
    font-size: ${props => props.size}px;
  }
  .icon {
    font-size: 0px;
    color: white;
  }
`