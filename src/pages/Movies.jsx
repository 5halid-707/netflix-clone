import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'

function Movies() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <TitleCards title="movies.popular" endpoint="popular" params="movie" />
        <TitleCards title="movies.action" endpoint="discover" params={{ with_genres: 28, sort_by: 'popularity.desc' }} />
        <TitleCards title="movies.drama" endpoint="discover" params={{ with_genres: 18, sort_by: 'popularity.desc' }} />
        <TitleCards title="movies.thriller" endpoint="discover" params={{ with_genres: 53, sort_by: 'popularity.desc' }} />
      </div>
      <Footer />
    </div>
  )
}

export default Movies
