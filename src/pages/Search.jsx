import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { allItems, getImage } from '../data/movies'
import { useLanguage } from '../context/LanguageContext'

function Search() {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = allItems.filter(item => {
    const match = item.name.toLowerCase().includes(query.toLowerCase())
    const typeMatch = filter === 'all' || item.type === filter
    return match && typeMatch
  })

  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="search-page">
        <h1>{t('search.title')}</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <div className="search-filters">
            {['all', 'movies', 'tv'].map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {t(`search.${f}`)}
              </button>
            ))}
          </div>
        </div>
        <div className="search-results">
          {query && filtered.length === 0 && (
            <p className="search-empty">{t('search.noResults')}</p>
          )}
          <div className="card-list">
            {filtered.map(item => (
              <Link to={`/details/${item.id}`} key={item.id} className="card">
                <img src={getImage(item.path)} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search
