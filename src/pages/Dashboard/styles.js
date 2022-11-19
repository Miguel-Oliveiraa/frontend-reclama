import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
`;

export const Header = styled.div`
  margin-top: 56px;
  margin-left: 56px;
`;

export const CustomInput = styled.input`
  background-color: transparent;
  width: 100%;
  border-width: 0px 0px 1px 0px;
  border-color: #ff8500;
  text-decoration: none;
  color: #fff;
`;

export const Search = styled.div`
  display: flex;
  width: 86vw;
  margin-top: 42px;
  margin-left: 56px;
  flex-direction: row;
  gap: 13px;
`;
export const List = styled.div`
  width: 86vw;
  margin-top: 42px;
  margin-left: 56px;
  .iconeStatus {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  .itemDescriptionTitle {
    display: flex;
    align-items: center;
  }
  .itemDescription {
    margin-top: 8px;
  }
`;

export const Pendente = styled.div`
  display: flex;
  background-color: #29292e;
  border-radius: 50px;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;
