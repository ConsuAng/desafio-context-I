import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const [photos, setPhotos] = useState([]);
  const globalPhotos = {photos, setPhotos};
  const url = "/fotos.json";

  async function getPhotos() {
    try {
      const res = await axios.get(url)
      const { data } = await res;
      const dataPhotos = data.photos
      setPhotos(dataPhotos)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPhotos()
  },[]);

  return (
    <div className="App">
      <Context.Provider value={globalPhotos}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path='/*' element={ <NotFound/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
