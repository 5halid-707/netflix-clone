import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { allItems } from '../data/movies'

function Player() {
  const { id } = useParams()
  const { t } = useLanguage()
  const item = allItems.find(i => i.id === Number(id))

  return (
    <div className="player">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt={t('player.back')} />
      </Link>
      {item ? (
        <>
          <iframe
            width="90%"
            height="80%"
            src="https://www.youtube.com/embed/6ZfuNTqbHE8"
            title={item.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="player-info">
            <p>{t('player.back')}: {item.name} ({item.year})</p>
            <p>KmhFlix</p>
          </div>
        </>
      ) : (
        <p style={{ color: '#fff' }}>{t('player.notFound')}</p>
      )}
    </div>
  )
}

export default Player
