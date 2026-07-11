import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tmdb, img } from '../services/tmdb'
import { useLanguage } from '../context/LanguageContext'

function Top10Section() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()
  const [items, setItems] = useState([])

  useEffect(() => {
    tmdb.trending('movie', 'week').then(data => {
      setItems((data.results || []).slice(0, 10))
    })
  }, [])

  return (
    <div className="top10-section">
      <h2>{t('home.top10')}</h2>
      <div className="top10-row" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {items.map((item, i) => (
          <div key={item.id} className="top10-card" onClick={() => navigate(`/player/${item.id}?type=movie`)}>
            <span className="top10-number">{String(i + 1).padStart(2, '0')}</span>
            <img src={img(item.poster_path) || 'https://placehold.co/160x240/333/fff?text=No+Poster'} alt={item.title || item.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Top10Section
