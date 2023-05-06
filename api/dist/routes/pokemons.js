"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pokemonsRoutes = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllerallPokemon = require("../controllers/controllerallPokemon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var pokemonsRoutes = function pokemonsRoutes() {
  router.route("/").get(_controllerallPokemon.controllerAllPokemon);
};
exports.pokemonsRoutes = pokemonsRoutes;