import axios from "axios";
import { API_URL } from "./configService";

export const getPokemonIdServices = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/generation/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
