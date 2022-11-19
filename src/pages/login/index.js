import React, { useState } from "react";
import { Container, TextWrapper, ButtonWrapper, CustomInput } from "./styles";
import Logo from "../../assets/reclama.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SingIn from "../../services/requests/SingIn";

export default function Login() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const resultado = await SingIn(cpf, password);
    if (resultado.status != 200) {
      return [];
    }
    navigate("/dashboard");
  }

  return (
    <Container>
      <div className="superior">
        <img src={Logo} alt="reclama" />
        <p className="subTitle">Faca login e comece a usar</p>
      </div>
      <TextWrapper>
        <CustomInput
          id="cpf"
          placeholder="Insira seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <CustomInput
          id="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextWrapper>
      <ButtonWrapper>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF8500" }}
          onClick={handleSignIn}
        >
          Entrar na plataforma
        </Button>
        <a href="#" className="forgetPassword">
          Esqueceu sua senha?
        </a>
      </ButtonWrapper>
    </Container>
  );
}
