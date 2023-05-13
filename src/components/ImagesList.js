import { useContext } from "react";

import { ImagesContext } from "../context/ImagesContext";

import '../css/ImageList.css'

const ImagesList = () => {

    const {state: {filteredData}} = useContext(ImagesContext)

    const imageList = filteredData.map(item => (
        <div className="singleImage" key={item.id}>
            <img src={item.src} alt={item.alt} />
        </div>
    ))

    return ( 
        <div className="ImagesContainer">
            {imageList}
        </div>
     );
}
 
export default ImagesList;