import {BsSunFill, BsMoonFill}  from 'react-icons/bs'

function DarkModeBtn({darkMode, handleThemeBtnClick}) {
  return (
    <button className={`theme-btn ${darkMode ? 'dark-theme' : ''}`} onClick={handleThemeBtnClick}>
        <div className='theme-icon'>
            <div className="sun-icon">
                <BsSunFill color='#000'/>
            </div>
            <div className="moon-icon">
                <BsMoonFill color='#FFF'/>
            </div>
        </div>
    </button>
  )
}
export default DarkModeBtn