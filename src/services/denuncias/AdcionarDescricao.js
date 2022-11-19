import api from "../index";

export default async function AdcionarDescricao(jwt, id, descricao) {
  try {
    const response = await api.put(
      `/atendente/responder`,
      {
        id_denuncia: id,
        comentario: descricao,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return response.data.message;
  } catch (error) {
    return error;
  }
}
