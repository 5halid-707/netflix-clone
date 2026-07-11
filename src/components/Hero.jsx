function Hero() {
  return (
    <div className="hero">
      <img
        className="banner-img"
        src="https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg"
        alt="banner"
      />
      <div className="hero-caption">
        <img
          className="caption-img"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <p>
          Discover the best movies and TV shows. Watch anywhere, anytime.
          Sign up now and start your free trial.
        </p>
        <div className="hero-btns">
          <button className="btns">
            <img src="/play_icon.svg" alt="" /> Play
          </button>
          <button className="btns dark-btn">
            <img src="/info_icon.svg" alt="" /> More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
