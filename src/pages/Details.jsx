import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { allItems, getImage } from '../data/movies'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

const descriptions = {
  1: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into a CEO's mind.",
  2: 'Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.',
  3: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  4: "The Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
  5: "Peter Parker's secret identity is revealed, forcing him to seek help from Doctor Strange.",
  6: 'A mentally troubled comedian embarks on a downward spiral of crime in Gotham City.',
  7: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
  8: 'A paraplegic Marine dispatched to the distant moon Pandora becomes torn between following orders and protecting the world he feels is home.',
  9: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
  10: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.',
  11: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
  12: 'When the kingdom becomes trapped in perpetual winter, a fearless princess embarks on a journey to find her estranged sister.',
  13: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
  14: 'Barbie and Ken discover the joys and challenges of living in the real world.',
  15: 'In a post-apocalyptic world, a hardened survivor is hired to smuggle a teenager out of a quarantine zone.',
  16: 'A student at Nevermore Academy uses her psychic abilities to solve a murder mystery.',
  17: 'A group of kids in 1980s Indiana uncover supernatural forces and secret government experiments.',
  18: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games for a tempting prize.',
  19: 'A group of vigilantes take on corrupt superheroes who abuse their powers.',
  20: 'An epic fantasy about the war for the Iron Throne in the land of Westeros.',
  21: 'A monster hunter struggles to find his place in a world where people are more wicked than beasts.',
  22: "Two sisters from rival factions in the utopian city of Piltover clash as a new technology threatens to tear them apart.",
  23: "Monkey D. Luffy sets off on an adventure to find the legendary One Piece treasure and become the Pirate King.",
  24: 'In a retro-futuristic world, survivors of a nuclear war emerge from underground bunkers to reclaim the wasteland.',
  25: 'A high school chemistry teacher diagnosed with terminal cancer turns to cooking and selling methamphetamine.',
  26: 'Noble families fight for control of the Iron Throne in the Seven Kingdoms of Westeros.',
  27: 'Follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the 20th century.',
  28: 'A family saga with a supernatural twist, set in a German town where the disappearance of two children exposes the secrets of four families.',
  29: 'A criminal mastermind and his team plan the biggest heist in history on the Royal Mint of Spain.',
  30: 'A gangster family epic set in 1919 Birmingham, England, centered on the Peaky Blinders gang.',
  31: 'A lone bounty hunter in the outer reaches of the galaxy protects a mysterious child from Imperial forces.',
  32: 'The Roy family fights for control of their global media empire as the patriarchs health declines.',
  33: 'A young chef from the fine-dining world returns to Chicago to run his family sandwich shop.',
  34: 'The brilliant detective Sherlock Holmes and his partner Dr. Watson solve complex cases in modern-day London.',
  35: 'The true story of the rise and fall of Colombian drug lord Pablo Escobar and the DEA agents hunting him.',
  36: 'A mockumentary about the everyday lives of employees at the Dunder Mifflin paper company.',
  37: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything.',
  38: 'In a post-apocalyptic wasteland, a woman joins forces with a group of survivors to outrun a tyrannical warlord.',
  39: 'A New York City cop must save his wife and others from a group of terrorists holding hostages in a skyscraper.',
  40: 'Ethan Hunt and his IMF team race against time to prevent a nuclear disaster.',
  41: 'An elite SWAT team is trapped in a high-rise apartment building controlled by a ruthless crime lord.',
  42: 'A team of commandos is hunted by an alien warrior in the Central American jungle.',
  43: 'A human soldier is sent back in time to protect Sarah Connor from a cybernetic assassin.',
  44: 'A black-ops mercenary is sent to rescue a kidnapped drug lord son in Dhaka, Bangladesh.',
  45: 'An MI6 agent goes on a mission to retrieve a stolen list of undercover agents in 1989 Berlin.',
  46: 'A quiet family man unleashes a deadly skillset after two home invaders steal his wifes keepsake.',
  47: 'A retired intelligence operative uses his skills to help those in need as a vigilante for hire.',
  48: 'A former CIA operative must use all his skills to rescue his daughter after she is kidnapped while traveling abroad.',
}

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { addToList, isInList, removeFromList } = useAuth()
  const item = allItems.find(i => i.id === Number(id))
  const similar = allItems.filter(i => i.type === item?.type && i.id !== item?.id).slice(0, 6)

  if (!item) return (
    <div><Navbar /><div style={{ height: '100px' }} /><p style={{ textAlign: 'center', color: '#fff', padding: 50 }}>{t('player.notFound')}</p><Footer /></div>
  )

  const inList = isInList(item.id)

  return (
    <div>
      <Navbar />
      <div className="details-page">
        <button className="details-back" onClick={() => navigate(-1)}>← {t('details.back')}</button>
        <div className="details-content">
          <img className="details-poster" src={getImage(item.path)} alt={item.name} />
          <div className="details-info">
            <h1>{item.name}</h1>
            <div className="details-meta">
              <span>{item.year}</span>
              <span className="details-type">{item.type === 'movie' ? t('search.movies') : t('search.tv')}</span>
            </div>
            <p className="details-desc">
              {descriptions[item.id] || `${t('details.overview')} ${item.name}`}
            </p>
            <div className="details-btns">
              <button className="btns" onClick={() => navigate(`/player/${item.id}`)}>
                <img src="/play_icon.svg" alt="" /> {t('hero.play')}
              </button>
              <button
                className={`btns dark-btn ${inList ? 'in-list' : ''}`}
                onClick={() => inList ? removeFromList(item.id) : addToList(item)}
              >
                {inList ? t('details.inList') : t('details.addToList')}
              </button>
            </div>
          </div>
        </div>
        {similar.length > 0 && (
          <div className="title-cards">
            <h2>{t('details.similar')}</h2>
            <div className="card-list">
              {similar.map(s => (
                <div key={s.id} className="card" onClick={() => navigate(`/details/${s.id}`)}>
                  <img src={getImage(s.path)} alt={s.name} />
                  <p>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Details
