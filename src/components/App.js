import React, { useState, useEffect } from 'react';
import {FaArrowAltCircleUp} from "react-icons/fa"

import ImageProvider from "../context/ImagesContext";

import ImageSearcher from "./ImageSearcher";
import ImagesList from "./ImagesList";

import Footer from "./Footer";

import '../css/App.css'

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true);
    } 
    else if (scrolled <= 300){
      setVisible(false);
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ImageProvider>
      <div  className="app">
        <header>
          <ImageSearcher />
        </header>
        <main>
          <ImagesList/>
        </main>
        <footer>
          <Footer/>
        </footer>
        {visible && 
          <button className='scrollButton' onClick={scrollToTop}><FaArrowAltCircleUp/></button>
        }
      </div>
    </ImageProvider>
  );
}

export default App;
