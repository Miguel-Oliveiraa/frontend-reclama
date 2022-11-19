import api from "../index";

export default async function GetDenunciasPorStatus(status) {
  try {
    const response = await api.get(`/denuncia/get/status/${status}`);
    return response.data.message;
  } catch (error) {
    return error;
  }
}
