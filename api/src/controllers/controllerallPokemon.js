import { Router } from "express";
import { getPokemons } from "../service/getAllPokemonServices.js";

const router = Router();

export const PokemonController = async (req, res) => {
  try {
    const pokemons = await getPokemons();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
