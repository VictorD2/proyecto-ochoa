import axios from "axios";
import { API } from "../config/config";
// import Expediente from "../interfaces/Expediente";
const api = `${API}/api/v0/expediente`;

export const getAll = async (page: number, keyword: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}`);
  return await axios.get(`${api}?page=${page}`);
};
export const getByCodigoExpediente = async (id: string) => {
  return await axios.get(`${api}/${id}`);
};
export const getCount = async (keyword: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count`);
  return await axios.get(`${api}/count?keyword=${keyword}`);
};
export const getResumen = async () => {
  return await axios.get(`${api}/resumen`);
};

export const createExpediente = async (expediente: FormData) => {
  return await axios.post(`${api}`, expediente, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const editarExpediente = async (id: string | undefined, expediente: FormData) => {
  return await axios.put(`${api}/${id}`, expediente);
};

export const eliminarExpediente = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
