import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoint, baseQuery, setHeaders, headers } from "../config";
const { base, list } = endpoint.pokemon;
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery,
  tagsTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => ({
        url: `/${base}/${list}`,
        method: "GET",
        mode: "cors",
      }),
    }),
    getPokemonId: builder.query({
      query: ({ id }) => ({
        url: `/${base}/${id}`,
      }),
    }),
    createPokemonId: builder.mutation({
      query: (body) => ({
        url: `/${base}`,
        method: "POST",
        body: body,
        mode: "cors",
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updatePokemonId: builder.mutation({
      query: (body) => ({
        url: `/${base}/${body.id}`,
        method: "PUT",
        body: body,
        mode: "cors",
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
});

export const {
  useGetAllPokemonsQuery,
  useLazyGetAllPokemonsQuery,
  useGetPokemonIdQuery,
  useLazyGetPokemonIdQuery,
  useCreatePokemonIdMutation,
  useUpdatePokemonIdMutation,
} = pokemonApi;
