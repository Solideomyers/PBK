import { Router } from "express";
import { getPokemonIdServices } from "../service/getPokemonsIdServices.js";

const router = Router();

export const controllerPokemonId = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonId = await getPokemonIdServices(id);
    res.json(pokemonId);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
