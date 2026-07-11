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
          <TitleCards title={t('home.popular')} category="popular" />
          <TitleCards title={t('home.trending')} category="trending" />
          <TitleCards title={t('home.topRated')} category="topRated" />
          <TitleCards title={t('home.action')} category="action" />
        </div>
        <FAQ />
        <EmailCtaSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
