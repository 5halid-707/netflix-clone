import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { tmdb, img } from '../services/tmdb'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Details() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || 'movie'
  const { t } = useLanguage()
  const { addToList, isInList } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState(null)

  useEffect(() => {
    tmdb.details(type, id).then(setData).catch(() => {})
  }, [id, type])

  if (!data) return <div className="details-page"><Navbar /><p style={{ padding: '100px 6%', color: '#666' }}>{t('common.loading')}</p></div>

  const title = data.title || data.name
  const year = (data.release_date || data.first_air_date || '').split('-')[0]
  const genres = (data.genres || []).map(g => g.name).join(', ')
  const trailer = (data.videos?.results || []).find(v => v.type === 'Trailer' && v.site === 'YouTube')
  const cast = (data.credits?.cast || []).slice(0, 8)
  const recommendations = (data.recommendations?.results || []).slice(0, 12)

  return (
    <div>
      <Navbar />
      <div className="details-page">
        <button className="details-back" onClick={() => navigate(-1)}>{t('details.back')}</button>
        <div className="details-content">
          <img className="details-poster" src={img(data.poster_path) || 'https://placehold.co/300x450/333/fff?text=No+Poster'} alt={title} />
          <div className="details-info">
            <h1>{title}</h1>
            <div className="details-meta">
              <span className="details-type">{type === 'movie' ? t('details.movie') : t('details.tv')}</span>
              {year && <span>{year}</span>}
              {data.vote_average > 0 && <span style={{ color: '#46d369' }}>{Math.round(data.vote_average * 10)}% match</span>}
            </div>
            <p className="details-desc">{data.overview || t('common.noOverview')}</p>
            {genres && <p style={{ color: '#999', marginBottom: 16, fontSize: 14 }}>{genres}</p>}
            <div className="details-btns">
              <button className="btns" onClick={() => navigate(`/player/${id}?type=${type}`)}>
                <img src="/assets/play_icon.svg" alt="" /> {t('hero.play')}
              </button>
              <button
                className={`btns ${isInList(data.id) ? 'in-list' : 'dark-btn'}`}
                onClick={() => addToList({ id: data.id, name: title, path: data.poster_path, type })}
              >
                {isInList(data.id) ? t('details.inList') : t('details.addToList')}
              </button>
            </div>
            {cast.length > 0 && (
              <div style={{ marginTop: 30 }}>
                <p style={{ color: '#999', fontSize: 14 }}>{t('details.cast')}: {cast.map(c => c.name).join(', ')}</p>
              </div>
            )}
          </div>
        </div>
        {trailer && (
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 16 }}>{t('details.trailer')}</h2>
            <iframe
              width="100%" height="500" style={{ maxWidth: 800, borderRadius: 8 }}
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allow="encrypted-media" allowFullScreen
            />
          </div>
        )}
        {recommendations.length > 0 && (
          <div>
            <h2 style={{ marginBottom: 16 }}>{t('details.similar')}</h2>
            <div className="card-list">
              {recommendations.map(item => (
                <div key={item.id} className="card" style={{ cursor: 'pointer' }} onClick={() => { setData(null); navigate(`/details/${item.id}?type=${type}`) }}>
                  <img src={img(item.poster_path) || 'https://placehold.co/240x360/333/fff?text=No+Poster'} alt={item.title || item.name} loading="lazy" />
                  <p>{item.title || item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Details
