"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pokemons = require("./pokemons");
var router = (0, _express.Router)();
var getRoutes = function getRoutes() {
  router.use("/pokemons", (0, _pokemons.pokemonsRoutes)());
};
var _default = {
  getRoutes: getRoutes
};
exports["default"] = _default;