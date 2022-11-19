import React from "react";
import { Container, TextWrapper, ButtonWrapper } from "./styles";
import Logo from "../../assets/reclama.png";
import { TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <Container>
      <div className="superior">
        <img src={Logo} alt="reclama" />
        <p className="subTitle">Faca login e comece a usar</p>
      </div>
      <TextWrapper>
        <TextField
          className="cpf"
          id="cpf"
          label="Insira seu CPF"
          variant="standard"
          color="warning"
          style={{ borderColor: "#FF8500" }}
        />
        <TextField
          id="password"
          label="Insira sua senha"
          variant="standard"
          color="warning"
        />
      </TextWrapper>
      <ButtonWrapper>
        <Button variant="contained" style={{ backgroundColor: "#FF8500" }}>
          Entrar na plataforma
        </Button>
        <a href="#" className="forgetPassword">
          Esqueceu sua senha?
        </a>
      </ButtonWrapper>
    </Container>
  );
}
