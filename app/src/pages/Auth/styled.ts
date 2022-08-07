import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);    
  padding: 10px;
  width: 700px;
  height: 540px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, .10);
  overflow: hidden;
`

export const Box = styled.div`
  position: relative;
  padding: 5px;

  > div {
    position: relative;
    transition: .4s;
    width: 100%;
    height: 100%;    

    &.login {
      left: -470px;
    }

    &.registry {
      left: 700px;
    }

    &.registry.activated {
      left: 225px;
    }

    &.login.activated {      
      left: 0px;
    }
  }
`

export const ChangeForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: -1;
`

export const ChangeFormToRegistry = styled.div`
  position: absolute;
  left: 0px;
  display: block;
  width: 200px;
  text-align: center;
  font-size: 1.2rem;

  > p {
    color: white;
    letter-spacing: 1px;
    line-height: 30px;
  }

  > button {
    border: none;
    background: none;
    color: rgba(255, 255, 255, .4);
    font-size: 1.8em;
    margin-top: 10px;
    transition: .5s;
    cursor: pointer;

    &:hover {
      color: #0cff7c;
    }
  }
`

export const ChangeFormToLogin = styled.div`
  position: absolute;
  right: 0px;
  display: block;
  width: 200px;
  text-align: center;
  font-size: 1.2rem;
  > p {
    color: white;
    letter-spacing: 1px;
    line-height: 30px;
  }

  > button {
    border: none;
    background: none;
    color: rgba(255, 255, 255, .4);
    font-size: 1.8em;
    margin-top: 10px;
    transition: .5s;
    cursor: pointer;

    &:hover {
      color: #0cff7c;
    }
  }
`