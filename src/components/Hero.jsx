function Hero() {
  return (
    <div className="hero">
      <img
        className="banner-img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-4b77-88a4-5c8b5a9f0b5e/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
            <img src="/assets/play_icon.svg" alt="" /> Play
          </button>
          <button className="btns dark-btn">
            <img src="/assets/info_icon.svg" alt="" /> More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
