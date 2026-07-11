import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tmdb, img } from '../services/tmdb'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

function TitleCards({ title, endpoint, params = {} }) {
  const { t } = useLanguage()
  const { addToList, isInList } = useAuth()
  const navigate = useNavigate()
  const scrollRef = useRef(null)
  const [items, setItems] = useState([])
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  useEffect(() => {
    if (!endpoint) return
    const fn = tmdb[endpoint]
    if (!fn) return
    let promise
    if (endpoint === 'trending') {
      const p = params || {}
      promise = fn(p.media || 'all', p.time || 'week')
    } else if (endpoint === 'discover') {
      const t = typeof params === 'string' ? params : 'movie'
      promise = fn(t, typeof params === 'object' && !Array.isArray(params) ? params : {})
    } else {
      promise = fn(params)
    }
    promise.then(data => {
      const results = (data.results || []).slice(0, 20)
      setItems(results)
      setTimeout(() => {
        const el = scrollRef.current
        if (el) setShowRight(el.scrollWidth > el.clientWidth)
      }, 100)
    })
  }, [endpoint, JSON.stringify(params)])

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

  const handleClick = (id, mediaType) => {
    navigate(`/details/${id}?type=${mediaType || 'movie'}`)
  }

  return (
    <div className="title-cards" style={{ position: 'relative' }}>
      <h2>{t(title)}</h2>
      {items.length === 0 && <p style={{ color: '#666', padding: 20, textAlign: 'center' }}>{t('common.empty')}</p>}
      {items.length > 0 && (
        <div className="title-cards-wrapper" style={{ position: 'relative' }}>
          {showLeft && (
            <button className="scroll-arrow scroll-arrow-left" onClick={() => scroll('left')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
          )}
          <div className="card-list" ref={scrollRef} onScroll={updateArrows}>
            {items.map((card) => {
              const posterPath = card.poster_path
              const title = card.title || card.name
              const media = card.media_type || (endpoint === 'popular' && params === 'movie' ? 'movie' : 'tv')
              const itemId = card.id
              return (
                <div key={itemId} className="card">
                  <img
                    src={img(posterPath) || 'https://placehold.co/240x360/333/fff?text=No+Poster'}
                    alt={title}
                    onClick={() => handleClick(itemId, media)}
                    style={{ cursor: 'pointer' }}
                    loading="lazy"
                  />
                  <p>{title}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToList({ id: itemId, name: title, path: posterPath, type: media }) }}
                    className="add-btn"
                  >
                    {isInList(itemId) ? '✓' : '+'}
                  </button>
                </div>
              )
            })}
          </div>
          {showRight && (
            <button className="scroll-arrow scroll-arrow-right" onClick={() => scroll('right')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default TitleCards
