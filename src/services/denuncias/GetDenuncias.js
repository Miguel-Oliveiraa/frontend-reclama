import api from "../index";

export default async function GetDenuncias() {
  try {
    const response = await api.get("/denuncia/find");
    return response.data.message;
  } catch (error) {
    return error;
  }
}
