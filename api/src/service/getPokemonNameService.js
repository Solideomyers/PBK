import axios from "axios";
import { API_URL } from "./configService";

export const getPokemonNameServices = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/generation/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
