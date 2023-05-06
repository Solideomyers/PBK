import axios from "axios";
import { API_URL } from "./configService";

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${API_URL}/generation`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
