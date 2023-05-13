const ImageReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SEARCH_BUTTON":
      return {
        ...state,
        filteredData: state.data.filter(
          (item) => item.category === action.value
        ),
      };
      case "SEARCH_INPUT":
        return {
          ...state,
          filteredData: state.data.filter(item => item.alt.toLowerCase().includes(action.value.toLowerCase()))
        };
    default:
      throw new Error("something went wrong");
  }
};

export default ImageReducer;
