import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories, getImage } from '../data/movies'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

function TitleCards({ title, category, filter }) {
  const { t } = useLanguage()
  const { addToList, isInList } = useAuth()
  const scrollRef = useRef(null)
  const navigate = useNavigate()
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const items = (categories[category] || []).filter(i => !filter || i.type === filter)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 10)
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    setTimeout(updateArrows, 350)
  }

  return (
    <div className="title-cards" style={{ position: 'relative' }}>
      <h2>{t(title)}</h2>
      <div className="title-cards-wrapper" style={{ position: 'relative' }}>
        {showLeft && (
          <button className="scroll-arrow scroll-arrow-left" onClick={() => scroll('left')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
        )}
        <div className="card-list" ref={scrollRef} onScroll={updateArrows}>
          {items.map((card) => (
            <div key={card.id} className="card">
              <img
                src={getImage(card.path)}
                alt={card.name}
                onClick={() => navigate(`/player/${card.id}`)}
                style={{ cursor: 'pointer' }}
              />
              <p>{card.name}</p>
              <button
                onClick={(e) => { e.stopPropagation(); addToList(card) }}
                className="add-btn"
              >
                {isInList(card.id) ? '✓' : '+'}
              </button>
            </div>
          ))}
        </div>
        {showRight && (
          <button className="scroll-arrow scroll-arrow-right" onClick={() => scroll('right')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default TitleCards
