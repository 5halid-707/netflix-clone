import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const { t } = useLanguage()
  return (
    <div className="hero">
      <img
        className="banner-img"
        src="https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg"
        alt={t('hero.banner')}
      />
      <div className="hero-caption">
        <img
          className="caption-img"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt={t('hero.logo')}
        />
        <p>{t('hero.description')}</p>
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
