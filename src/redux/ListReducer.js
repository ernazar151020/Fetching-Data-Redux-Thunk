const initialState = {
  data: [],
  isLoading: false,
  errorMessage: false,
  count: 0,
};

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LISTS_LOADING":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case "LISTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        data: action.payload.results,
        count: action.payload.count,
      };
    default:
      return state;
  }
};
