import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../features/api/pokemonApi";
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath] : pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware) 
})

setupListeners(store.dispatch)