import { Router } from "express";
import { pokemonsRoutes } from "./pokemonsRoutes";
const router = Router();

export function getRoutes() {
  router.use("/generation", pokemonsRoutes());
  router.route("/").get((req, res) => {
    res.json({
      "/generation": "endPointListPokemon",
    });
  });
  return router;
}
