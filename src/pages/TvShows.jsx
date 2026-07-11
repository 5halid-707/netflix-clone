import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'

function TvShows() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <TitleCards title="tv.popular" endpoint="popular" params="tv" />
        <TitleCards title="tv.drama" endpoint="discover" params={{ with_genres: 18, with_type: 'tv', sort_by: 'popularity.desc' }} />
        <TitleCards title="tv.comedy" endpoint="discover" params={{ with_genres: 35, with_type: 'tv', sort_by: 'popularity.desc' }} />
        <TitleCards title="tv.action" endpoint="discover" params={{ with_genres: 10759, sort_by: 'popularity.desc' }} />
      </div>
      <Footer />
    </div>
  )
}

export default TvShows
