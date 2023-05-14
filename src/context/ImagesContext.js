import { createContext, useReducer, useState } from "react";

import ImageReducer from "../reducer/ImageReducer";

import { imageData } from "../data";

export const ImagesContext = createContext();


const initialState = {
    data: imageData, // original data
    filteredData: imageData, // filtered data
  };

const ImageProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");

  const [state, dispatch] = useReducer(ImageReducer, initialState);

  return (
    <ImagesContext.Provider
      value={{
        state,
        dispatch,
        inputValue,
        setInputValue,
        buttonValue,
        setButtonValue,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export default ImageProvider;
