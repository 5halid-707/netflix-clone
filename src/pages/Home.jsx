import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ReasonsSection from '../components/ReasonsSection'
import TitleCards from '../components/TitleCards'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

function Home() {
  const { t } = useLanguage()
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="home-after-hero">
        <ReasonsSection />
        <div className="more-cards">
          <TitleCards title={t('home.popular')} category="popular" />
          <TitleCards title={t('home.trending')} category="trending" />
          <TitleCards title={t('home.topRated')} category="topRated" />
          <TitleCards title={t('home.action')} category="action" />
        </div>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Home
