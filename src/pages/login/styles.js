import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  .subTitle {
    text-align: center;
    margin-top: 16px;
    color: #fff;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
  justify-content: space-between;
  gap: 16px;

`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .forgetPassword {
    align-self: center;
    color: #fff;
    margin-top: 32px;
  }
`;
