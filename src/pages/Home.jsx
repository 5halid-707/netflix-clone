import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Top10Section from '../components/Top10Section'
import ReasonsSection from '../components/ReasonsSection'
import TitleCards from '../components/TitleCards'
import FAQ from '../components/FAQ'
import EmailCtaSection from '../components/EmailCtaSection'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

function Home() {
  const { t } = useLanguage()
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="home-after-hero">
        <Top10Section />
        <ReasonsSection />
        <div className="more-cards">
          <TitleCards title="home.popular" endpoint="popular" params="movie" />
          <TitleCards title="home.trending" endpoint="trending" params={{ media: 'tv', time: 'week' }} />
          <TitleCards title="home.topRated" endpoint="topRated" params="movie" />
          <TitleCards title="home.action" endpoint="discover" params={{ with_genres: 28, sort_by: 'popularity.desc' }} />
        </div>
        <FAQ />
        <EmailCtaSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
