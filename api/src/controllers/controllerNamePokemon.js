import { Router } from "express";
import { getPokemons } from "../service/getAllPokemonServices.js";

const router = Router();

export const controllerNamePokemon = async (req, res) => {
  try {
    const { name } = req.params;
    // console.log(name);
    const pokemonName = await getPokemons(name);
    res.json(pokemonName);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
