import { useContext, useRef } from "react";
import { ImagesContext } from "../context/ImagesContext";
import { MdSearch } from "react-icons/md";
import "../css/ImageSearcher.css";

const ImageSearcher = () => {
  const inputRef = useRef();

  const { inputValue, setInputValue, setButtonValue, dispatch } =
    useContext(ImagesContext);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch({ type: "SEARCH_INPUT", value });
  };

  const handleButton = (value) => {
    setButtonValue(value);
    dispatch({ type: "SEARCH_BUTTON", value });
  };

  const handleSearchButton = () => {
    inputRef.current.focus();
  };

  return (
    <div className="searcherContainer">
      <div className="inputImageSearcher">
        <div className="searcherDescription">
          <h2>ImageScout</h2>
          <p>Your view of the world just a click away</p>
        </div>
        <label htmlFor="searchInput">
          <button onClick={handleSearchButton} aria-label="search">
            <MdSearch />
          </button>
          <input
            id="searchInput"
            ref={inputRef}
            type="text"
            placeholder="Search high-resolution images"
            value={inputValue}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className="buttonGroupContainer">
        <div className="buttonGroup">
          <button onClick={() => handleButton("landscape")}>Landscape</button>
          <button onClick={() => handleButton("animals")}>Animals</button>
          <button onClick={() => handleButton("buildings")}>Building</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSearcher;
