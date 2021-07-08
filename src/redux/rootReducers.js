import { combineReducers } from "redux";
import { ListReducer } from "./ListReducer";
import { PokemonReducer } from "./PokemonReducer";

export const combinedReducers = combineReducers({
  lists: ListReducer,
  singlePokemon: PokemonReducer,
});
