import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import MoviePage from "./pages/MoviePage";
import NotFound from './pages/NotFound'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {OMDBProvider} from "./context/OMDBContext";

function App() {

  // theme class in body from the local storage
  const body = document.body
  const theme = localStorage.getItem('theme')
  if(theme) {
    body.classList.add(theme)
  } else {
    body.classList.add('dark')
  }

  // theme state
  const [darkMode, setDarkMode] = useState(true);

  // theme btn handle claick
  const handleThemeBtnClick = () => {
    if(!darkMode) {
        setDarkMode(true)
        body.classList.replace('light', 'dark')
        localStorage.setItem('theme', 'dark')
    } else if (darkMode) {
        setDarkMode(false)
        body.classList.replace('dark', 'light')
        localStorage.setItem('theme', 'light')
    }
  }
  return (
    <OMDBProvider>
      <BrowserRouter>
        <Navbar darkMode={darkMode} handleThemeBtnClick={handleThemeBtnClick} />
        <main>
          <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path='/notfound' element={<NotFound darkMode={darkMode} />} />
                <Route path='/*' element={<NotFound darkMode={darkMode} />} />
              </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </OMDBProvider>
  )
}

export default App;
