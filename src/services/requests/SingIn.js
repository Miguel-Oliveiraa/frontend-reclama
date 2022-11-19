import api from "../index";

export default async function SingIn(identifier, password) {
  try {
    const response = await api.post("/atendente/login", {
      cpf: identifier,
      senha: password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
