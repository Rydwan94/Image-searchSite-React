const ImageReducer = (state, action) => {
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
        filteredData: state.data.filter((item) =>
          item.alt.toLowerCase().includes(action.value.toLowerCase())
        ),
      };
    case "IMAGE_ZOOM":
      return {
        ...state,
        filteredData: state.filteredData.map(item => 
          item.id === action.id ? {...item, isActive: !item.isActive} : item
        )
      };
    default:
      throw new Error("something went wrong");
  }
};

export default ImageReducer;
