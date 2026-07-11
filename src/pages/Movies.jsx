import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'

function Movies() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <TitleCards title="movies.popular" category="popular" />
        <TitleCards title="movies.action" category="action" />
        <TitleCards title="movies.drama" category="topRated" />
        <TitleCards title="movies.thriller" category="trending" />
      </div>
      <Footer />
    </div>
  )
}

export default Movies
