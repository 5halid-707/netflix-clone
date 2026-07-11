import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TitleCards from '../components/TitleCards'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="more-cards">
        <TitleCards title="Popular on Netflix" />
        <TitleCards title="Trending Now" />
        <TitleCards title="Top Rated" />
        <TitleCards title="Action Movies" />
      </div>
      <Footer />
    </div>
  )
}

export default Home
