import { useContext, useRef, useState } from "react";
import { ImagesContext } from "../context/ImagesContext";
import { MdSearch } from "react-icons/md";
import "../css/ImageSearcher.css";

const ImageSearcher = () => {
  const inputRef = useRef();

  const { inputValue, setInputValue, setButtonValue, dispatch } =
    useContext(ImagesContext);

  const [activeButtons, setActiveButtons] = useState({
    landscape: false,
    animals: false,
    building: false,
    peopel: false,
    space: false,
  });

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch({ type: "SEARCH_INPUT", value });
    if(value.length > 0){
      setActiveButtons(() => ({[value]: true }));
    }
  };

  const handleCategoryButton = (value) => {
    setButtonValue(value);
    dispatch({ type: "SEARCH_BUTTON", value });
    setActiveButtons({
      landscape: false,
      animals: false,
      buildings: false,
    });

    setActiveButtons((prev) => ({ ...prev, [value]: true }));
    setInputValue('')

  };

  const handleSearchButton = () => {
    inputRef.current.focus();
    if (inputValue.length > 0) {
      const imageElement = document.getElementById(inputValue);
      if (imageElement) {
        imageElement.scrollIntoView();
        setInputValue("");
      }
    } else {
      alert("enter value to search for an image");
    }
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
        <button
            className={activeButtons.landscape ? "active" : ""}
            onClick={() => handleCategoryButton("landscape")}
          >
            Landscape
          </button>
          <button
            className={activeButtons.animals ? "active" : ""}
            onClick={() => handleCategoryButton("animals")}
          >
            Animals
          </button>
          <button
            className={activeButtons.buildings ? "active" : ""}
            onClick={() => handleCategoryButton("buildings")}
          >
            Buildings
          </button>
          <button
            className={activeButtons.peopel ? "active" : ""}
            onClick={() => handleCategoryButton("peopel")}
          >
            Peopel
          </button>
          <button
            className={activeButtons.space ? "active" : ""}
            onClick={() => handleCategoryButton("space")}
          >
            Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSearcher;
