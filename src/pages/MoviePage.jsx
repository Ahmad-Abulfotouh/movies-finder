import {useEffect, useContext} from 'react'
import OMDBContext from '../context/OMDBContext'
import {useParams, Link} from 'react-router-dom'

function MoviePage() {
  const {getMovie, movie, loading} = useContext(OMDBContext)
  const params = useParams()

  useEffect(() => {
    getMovie(params.id)
  }, [])

  if(loading) return <p style={{color: '#FFF'}}>loading...</p>
  else return (
    <div className="movie-page">
      <div className="main-card">
        <div className="poster">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : '/images/not-available.jpg'} alt={movie.Title} />
        </div>
        <div className='details'>
          <h1 className="title">{movie.Title}</h1>
          <p><span>Genre:</span> {movie.Genre}</p>
          <p><span>Released:</span> {movie.Released}</p>
          <p><span>IMPB Rating:</span> {movie.imdbRating}</p>
          <p><span>Run Time:</span> {movie.Runtime}</p>
          <p><span>Director:</span> {movie.Director}</p>
          <p><span>Writer:</span> {movie.Writer}</p>
          <p><span>Actors:</span> {movie.Actors}</p>
        </div>
      </div>
      <div className="plot-card">
        <h2>Plot</h2>
        <p>{movie.Plot}</p>
        <a href={`https://www.imdb.com/title/${params.id}`} target="_blank">
          <button className="btn imdb-btn">View On IMDB</button>
        </a>
        <Link to="/">
          <button className="btn back-btn">Back To Search</button>
        </Link>
      </div>
    </div>
  )
}
export default MoviePage