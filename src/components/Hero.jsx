import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const [email, setEmail] = useState('')
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleStart = (e) => {
    e.preventDefault()
    navigate(`/signup?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="hero">
      <div className="hero-backdrop">
        <img
          className="banner-img"
          src="https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg"
          alt={t('hero.banner')}
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-tagline">{t('hero.tagline')}</h1>
        <p className="hero-subtagline">{t('hero.subtagline')}</p>
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
        <div className="hero-btns">
          <button className="btns">
            <img src="/play_icon.svg" alt="" /> {t('hero.play')}
          </button>
          <button className="btns dark-btn">
            <img src="/info_icon.svg" alt="" /> {t('hero.moreInfo')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
