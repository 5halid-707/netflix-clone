import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const posters = [
  'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BytUrRTNE7ae.jpg',
  'https://image.tmdb.org/t/p/w500/9xjZS2rlVdYFhREh1sIvT0cR3AD.jpg',
  'https://image.tmdb.org/t/p/w500/a1MlbLBk5L6dusWcvMh37wY8kqs.jpg',
  'https://image.tmdb.org/t/p/w500/ceLdI42iG2xCFMH7Ck12tKvM5Fa.jpg',
  'https://image.tmdb.org/t/p/w500/tYkQw0rT5NsZmLHkX77j3zAMCqg.jpg',
  'https://image.tmdb.org/t/p/w500/stTEyCFGrrQGG2EDgXoP0FcSJMh.jpg',
  'https://image.tmdb.org/t/p/w500/gpbFkPKuzGRPOTkzS2PjTrHPRIX.jpg',
  'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
]

function Top10Section() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()

  return (
    <div className="top10-section">
      <h2>{t('home.top10')}</h2>
      <div className="top10-row" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {posters.map((poster, i) => (
          <div key={i} className="top10-card" onClick={() => navigate('/details')}>
            <span className="top10-number">{String(i + 1).padStart(2, '0')}</span>
            <img src={poster} alt={`#${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Top10Section
