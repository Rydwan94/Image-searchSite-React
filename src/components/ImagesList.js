import { useContext, useEffect, useState } from "react";

import { ImagesContext } from "../context/ImagesContext";

import "../css/ImageList.css";

const ImagesList = () => {
  const [imageVisible, setImageVisible] = useState(false);

  const showImages = () => {
    const position = document.documentElement.scrollTop;
    if (position > 100) {
      setImageVisible(true);
    } else if (position <= 100) {
      setImageVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showImages);

    return () => {
      window.removeEventListener("scroll", showImages);
    };
  }, []);

  const {
    state: { filteredData },
    inputValue,
    dispatch,
  } = useContext(ImagesContext);

  const zoomImage = (id) => {
    dispatch({ type: "IMAGE_ZOOM", id });
    console.log("lala");
  };

  const imageList = filteredData.map((item) => (
    <div
      onClick={() => zoomImage(item.id)}
      className={item.isActive ? "zoomedSingleImage" : "singleImage"}
      id={inputValue}
      key={item.id}
    >
      <img
        className={imageVisible ? "showImages" : ""}
        src={item.src}
        alt={item.alt}
      />
    </div>
  ));

  return <div className="ImagesContainer">{imageList}</div>;
};

export default ImagesList;
