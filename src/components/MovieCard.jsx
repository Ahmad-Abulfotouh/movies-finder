import { useState } from "react"
import { Link } from "react-router-dom"

export default function MovieCard({id, title, poster}) {
  const [hover, setHover] = useState(false);
  return (
    <div className={`movie-card ${hover && 'movie-card-hover'}`} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="poster">
        <img src={poster !== 'N/A' ? poster : '/images/not-available.jpg'} />
      </div>
      <div className="gradient"></div>
      <div className="details">
        <h3>{title}</h3>
        <Link to={`/movie/${id}`}>
          <button>view details</button>
        </Link>
      </div>
    </div>
  )
}