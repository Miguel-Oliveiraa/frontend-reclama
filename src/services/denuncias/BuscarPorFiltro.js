import api from "../index";

export default async function GetDenunciasPorFiltro(filtro) {
  try {
    const response = await api.get(`/denuncia/get/filter/${filtro}`);
    return response.data.message;
  } catch (error) {
    return error;
  }
}
