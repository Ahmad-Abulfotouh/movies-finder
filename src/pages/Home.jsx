import SearchCard from "../components/SearchCard"
import MovieCard from "../components/MovieCard"
import {useState, useContext} from 'react'
import OMDBContext from "../context/OMDBContext"

function Home() {
  const {movies, loading} = useContext(OMDBContext)
  
  console.log(movies);
  console.log(loading);
  return (
    <>
      <SearchCard />
      <div className="movies-container" style={{color: '#FFF'}}>
        {
         loading ? <p>Loading...</p> : 
         movies ? movies.map((movie) => (<MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} />)) :
         <p>no data</p>
        }
      </div>
    </>
  )
}
export default Home