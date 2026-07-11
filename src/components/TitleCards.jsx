import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories, getImage } from '../data/movies'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

function TitleCards({ title, category, filter }) {
  const { t } = useLanguage()
  const { addToList, isInList } = useAuth()
  const scrollRef = useRef(null)
  const items = (categories[category] || []).filter(i => !filter || i.type === filter)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === 'left' ? -300 : 300
    }
  }

  return (
    <div className="title-cards">
      <h2>{t(title)}</h2>
      <div className="card-list" ref={scrollRef}>
        {items.map((card) => (
          <div key={card.id} className="card" style={{ position: 'relative' }}>
            <Link to={`/player/${card.id}`}>
              <img src={getImage(card.path)} alt={card.name} />
            </Link>
            <p>{card.name}</p>
            <button
              onClick={() => addToList(card)}
              style={{
                position: 'absolute', top: 8, right: 8,
                background: isInList(card.id) ? '#e50914' : 'rgba(0,0,0,0.7)',
                color: '#fff', border: '1px solid #fff', borderRadius: 4,
                padding: '2px 8px', cursor: 'pointer', fontSize: 11
              }}
            >
              {isInList(card.id) ? '✓' : '+α'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
