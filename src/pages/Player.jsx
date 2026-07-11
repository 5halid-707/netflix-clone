import { useParams, Link } from 'react-router-dom'

function Player() {
  const { id } = useParams()

  return (
    <div className="player">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="exit" />
      </Link>
      <iframe
        width="90%"
        height="80%"
        src="https://www.youtube.com/embed/6ZfuNTqbHE8"
        title="trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="player-info">
        <p>Now Playing: Movie {id}</p>
        <p>Netflix Khalid</p>
      </div>
    </div>
  )
}

export default Player
