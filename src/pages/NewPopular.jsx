import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'

function NewPopular() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <TitleCards title="new.trending" endpoint="trending" params={{ media: 'all', time: 'week' }} />
        <TitleCards title="new.coming" endpoint="discover" params={{ with_type: 'movie', sort_by: 'primary_release_date.desc', 'primary_release_date.gte': '2026-01-01' }} />
        <TitleCards title="new.recent" endpoint="nowPlaying" params={{}} />
      </div>
      <Footer />
    </div>
  )
}

export default NewPopular
