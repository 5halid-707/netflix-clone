import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TitleCards from '../components/TitleCards'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

function Home() {
  const { t } = useLanguage()
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="more-cards">
        <TitleCards title={t('home.popular')} category="popular" />
        <TitleCards title={t('home.trending')} category="trending" />
        <TitleCards title={t('home.topRated')} category="topRated" />
        <TitleCards title={t('home.action')} category="action" />
      </div>
      <Footer />
    </div>
  )
}

export default Home
