import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'

function TvShows() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <TitleCards title="tv.popular" category="trending" />
        <TitleCards title="tv.drama" category="topRated" />
        <TitleCards title="tv.action" category="action" />
        <TitleCards title="tv.comedy" category="popular" />
      </div>
      <Footer />
    </div>
  )
}

export default TvShows
