import {Link} from 'react-router-dom'
import DarkModeBtn from './DarkModeBtn'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

function Navbar({darkMode, handleThemeBtnClick}) {
  const [sideNav, setSideNave] = useState(false)
  function openSideNave() {
    setSideNave(true)
  }
  function closeSideNave() {
    setSideNave(false)
  }
  
  return (
    <nav>
        <div className="logo-side">
            <div className="menu-icon" onClick={openSideNave}>
                <AiOutlineMenu />
            </div>
            <Link to='/'>
                <div className="logo">movies finder</div>
            </Link>
        </div>
        <div className="nav-items">
            <Link to='/'>
                <div>home</div>
            </Link>
            <Link to='/about'>
                <div>about</div>
            </Link>
            <DarkModeBtn darkMode={darkMode} handleThemeBtnClick={handleThemeBtnClick} />
        </div>
        <div className={`side-nav ${sideNav && 'side-nav-open'}`}>
            <div className="close-icon" onClick={closeSideNave}>
                <AiOutlineClose />
            </div>
            <Link to='/'>
                <div onClick={closeSideNave}>home</div>
            </Link>
            <Link to='/about'>
                <div onClick={closeSideNave}>about</div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar