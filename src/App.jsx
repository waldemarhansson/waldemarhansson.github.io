import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigtionBar from './components/NavigationBar.jsx'
import FirstVideo from './components/FirstVideo'
import GalleryOfPhotos from './components/GalleryOfPhotos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavigtionBar/>
     <FirstVideo/>
     <GalleryOfPhotos/>
    </div>
  )
}

export default App
