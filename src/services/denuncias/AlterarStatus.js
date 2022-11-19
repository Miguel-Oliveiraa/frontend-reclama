import api from "../index";

export default async function AlterarStatus(jwt, id) {
  try {
    const response = await api.put(
      `/atendente/alterar/status/${id}`,
      {
        status: 1,
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
