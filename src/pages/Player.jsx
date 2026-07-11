import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { tmdb, img } from '../services/tmdb'
import { useLanguage } from '../context/LanguageContext'

function Player() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || 'movie'
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    tmdb.details(type, id).then(data => {
      setData(data)
      const videos = data.videos?.results || []
      const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube')
        || videos.find(v => v.type === 'Teaser' && v.site === 'YouTube')
        || videos[0]
      if (trailer) setVideo(trailer)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [id, type])

  if (loading) {
    return (
      <div className="player">
        <p>{t('common.loading')}</p>
      </div>
    )
  }

  const title = data?.title || data?.name

  return (
    <div className="player">
      <img onClick={() => navigate(-1)} src="/assets/play_icon.svg" alt={t('player.back')} style={{ transform: 'rotate(180deg)', width: 40 }} />
      {video ? (
        <iframe
          width="90%"
          height="80%"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&controls=1`}
          title={video.name}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : title ? (
        <div style={{ textAlign: 'center', padding: 40 }}>
          <img src={img(data.poster_path) || 'https://placehold.co/200x300/333/fff?text=No+Poster'} alt={title} style={{ width: 200, borderRadius: 8, marginBottom: 20 }} />
          <h1 style={{ margin: '10px 0' }}>{title}</h1>
          <p style={{ color: '#999', maxWidth: 600, margin: 'auto' }}>{data.overview}</p>
          <p style={{ color: '#666', marginTop: 10 }}>
            {data.vote_average ? `${Math.round(data.vote_average * 10)}% match` : ''} · {data.release_date || data.first_air_date || ''}
          </p>
        </div>
      ) : (
        <p>{t('player.notFound')}</p>
      )}
    </div>
  )
}

export default Player
