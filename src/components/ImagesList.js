import { useContext } from "react";

import { ImagesContext } from "../context/ImagesContext";

import '../css/ImageList.css'

const ImagesList = () => {

    const {state: {filteredData}, inputValue, dispatch} = useContext(ImagesContext)

    const zoomImage = (id) => {
        dispatch({type: 'IMAGE_ZOOM', id})
        console.log('lala')
      }

    const imageList = filteredData.map(item => (
        <div onClick={() => zoomImage(item.id)} className={item.isActive? 'zoomedSingleImage' : 'singleImage'} id={inputValue} key={item.id}>
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