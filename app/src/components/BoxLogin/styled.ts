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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const ForgetPassword = styled.div`

  padding-top: 5px;
  padding-bottom: 10px;
  position: relative;
  text-align: center;
  margin-left: 140px;

  > p {
    letter-spacing: 1px;
    font-size: 1rem;

    > a {
      text-decoration: none;
      color: #0cff7c;
    }
  }
`