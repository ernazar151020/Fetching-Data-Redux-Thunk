const initialState = {
  data: {},
  isLoading: false,
  errorMessage: "",
};
export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_LOADING":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case "POKEMON_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    case "POKEMON_FAIL":
      return {
        ...state,
        isLoading: false,
        errorMessage: "Unable to fetch data",
      };
    default:
      return state;
  }
};
