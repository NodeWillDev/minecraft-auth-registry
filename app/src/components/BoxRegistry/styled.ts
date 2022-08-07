import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 450px;
  height: 500px;
  padding: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const Title = styled.div`

  background-color: rgba(0, 0, 0, .4);
  margin-top: 5px;
  margin-bottom: 35px;
  padding: 5px;

  > h2 {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 3.5px;
    color: white;
  }
`

export const Date = styled.div`  
  padding: 15px;
  margin-bottom: 15px;
  margin-top: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: block;
`

export const ButtonStyled = styled.div`
  margin-top: 20px;
`