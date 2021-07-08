import axios from "axios";
export const fetchPosts = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "LISTS_LOADING",
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    const resp = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
    dispatch({
      type: "LISTS_SUCCESS",
      payload: resp.data,
    });
  } catch (error) {
    dispatch({
      type: "LISTS_FAIL",
    });
  }
};

export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LOADING",
    });
    const resp = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    console.log(resp);
    dispatch({
      type: "POKEMON_SUCCESS",
      payload: resp.data,
      pokemonName: pokemon,
    });
  } catch (error) {
    dispatch({
      type: "POKEMON_FAIL",
    });
  }
};
