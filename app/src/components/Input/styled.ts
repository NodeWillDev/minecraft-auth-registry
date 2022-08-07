import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 280px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;  
  left: 50%;
  transform: translateX(-50%);
  margin-top: 7px;
`

export const Icon = styled.div`
  background: none;
  text-align: center;
  font-size: 1.35em;  
  padding: 5px;
  color: rgba(0, 0, 0, .3);
  position: absolute;
  left: 100%;
  transition: .4s;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #00f0ff;
  background: none;
  outline: none;
  width: 200px;
  margin-left: 30px;
  padding: 5px;
  transition: .3s;
  margin-bottom: 20px;

  &:focus,
  &:not(:placeholder-shown) {
    padding: 8px;
    border: 1px solid #0cff7c;
    border-radius: 4px;
  } 

  &:focus ~ ${Icon},
  &:not(:placeholder-shown) ~ ${Icon} {
    color: #0cff7c;
  }  

  &:not(:placeholder-shown) ~ label,
  &:focus ~ label{
    left: 40px;
    top: -15px;
    letter-spacing: 2px;
    max-width: 100%;
  }
`

export const Label = styled.label`
  position: absolute;
  transition: .4s;
  left: -20px;
  top: 20px;
  font-size: .8em;
  max-width: 80px;
  display: flex;
`