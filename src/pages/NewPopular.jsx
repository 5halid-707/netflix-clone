import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'

function NewPopular() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <TitleCards title="new.trending" category="trending" />
        <TitleCards title="new.coming" category="popular" />
        <TitleCards title="new.recent" category="topRated" />
      </div>
      <Footer />
    </div>
  )
}

export default NewPopular
