import express from "express";
import { PokemonController } from "../controllers/controllerallPokemon.js";
import { controllerPokemonId } from "../controllers/controllerPokemonId.js";

// controlador global de las rutas de pokemon
export function pokemonsRoutes() {
  const router = express.Router();
  router.route("/").get((req, res) => {
    res.json({
      "/list": "endPoint List Pokemon",
      "/id": "endPoint Vista Detail Pokemon",
    });
  });
  router.route("/list").get(PokemonController);

  router.route("/:id").get(controllerPokemonId);
  return router;
}