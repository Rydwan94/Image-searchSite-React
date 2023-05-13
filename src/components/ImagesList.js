import { useContext } from "react";

import { ImagesContext } from "../context/ImagesContext";

const ImagesList = () => {

    const {state: {filteredData}} = useContext(ImagesContext)

    const imageList = filteredData.map(item => (
        <div key={item.id}>
            <img src={item.src} alt={item.alt} />
        </div>
    ))

    return ( 
        <div>
            {imageList}
        </div>
     );
}
 
export default ImagesList;