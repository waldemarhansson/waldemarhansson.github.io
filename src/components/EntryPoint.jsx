import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import App from "../App";
import VideoGallery from "./VideoGallery";
import Stillsgallery from "./Stillsgallery"
import ScrollToAnchor from "./ScrollToAnchor";

const EntryPoint = () => {






  return (

    <div className="App">

      <NavigationBar />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/film" element={<VideoGallery />} />
        <Route path="/stills" element={<Stillsgallery />} />
      </Routes>

    </div>

  )
}
export default EntryPoint