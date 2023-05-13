import ImageProvider from "../context/ImagesContext";

import ImageSearcher from "./ImageSearcher";
import ImagesList from "./ImagesList";

import '../css/App.css'

function App() {
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

        </footer>
      </div>
    </ImageProvider>
  );
}

export default App;
