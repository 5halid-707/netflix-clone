import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tmdb, img } from '../services/tmdb'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const [email, setEmail] = useState('')
  const [bg, setBg] = useState('')
  const { t } = useLanguage()
  const navigate = useNavigate()

  useEffect(() => {
    tmdb.trending('movie', 'week').then(data => {
      const results = data.results || []
      if (results.length > 0) {
        const pick = results[Math.floor(Math.random() * Math.min(5, results.length))]
        if (pick.backdrop_path) {
          setBg(`https://image.tmdb.org/t/p/w1280${pick.backdrop_path}`)
        }
      }
    })
  }, [])

  const handleStart = (e) => {
    e.preventDefault()
    navigate(`/signup?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="hero">
      <div className="hero-backdrop">
        <img
          className="banner-img"
          src={bg || 'https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg'}
          alt=""
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-tagline">{t('hero.tagline')}</h1>
        <p className="hero-subtagline">{t('hero.subtagline')}</p>
        <p className="hero-ready">{t('emailCta.ready')}</p>
        <form className="hero-email-form" onSubmit={handleStart}>
          <input
            type="email"
            placeholder={t('hero.emailPlaceholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t('hero.getStarted')}</button>
        </form>
      </div>
    </div>
  )
}

export default Hero
