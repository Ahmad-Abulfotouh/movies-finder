import {AiOutlineSearch} from 'react-icons/ai'
import {useContext, useState} from 'react'
import OMDBContext from "../context/OMDBContext"

function SearchCard() {
  const [text, setText] = useState('')
  const {movies, searchMovies} = useContext(OMDBContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const hangleSubmit = (e) => {
    e.preventDefault()

    if(text === '') alert('please enter somthing')
    else searchMovies(text)
  }

  return (
    <div className="search-card">
        <h2>search for any movie</h2>
        <form onSubmit={hangleSubmit}>
          <input type="text" placeholder="search" valve={text} onChange={handleChange} />
          <button type='submit'><AiOutlineSearch /></button>
        </form>
    </div>
  )
}
export default SearchCard