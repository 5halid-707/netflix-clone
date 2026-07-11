import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { tmdb, img } from '../services/tmdb'
import { useLanguage } from '../context/LanguageContext'

function Search() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const doSearch = useCallback(async (q) => {
    if (!q.trim()) { setResults([]); return }
    setLoading(true)
    const data = await tmdb.search(q)
    setResults(data.results || [])
    setLoading(false)
  }, [])

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) { setQuery(q); doSearch(q) }
  }, [searchParams, doSearch])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({ q: query })
    doSearch(query)
  }

  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="search-page">
        <h1>{t('search.title')}</h1>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
          />
        </form>
        <div className="search-filters">
          <button className="filter-btn active">{t('search.all')}</button>
        </div>
        {loading && <p className="search-empty">{t('common.loading')}</p>}
        {!loading && results.length === 0 && query && (
          <p className="search-empty">{t('search.noResults')}</p>
        )}
        {!loading && results.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
            {results.filter(i => i.media_type !== 'person').map(item => (
              <div key={item.id} className="card" onClick={() => navigate(`/details/${item.id}?type=${item.media_type || 'movie'}`)} style={{ cursor: 'pointer' }}>
                <img
                  src={img(item.poster_path) || 'https://placehold.co/240x360/333/fff?text=No+Poster'}
                  alt={item.title || item.name}
                  style={{ width: '100%', borderRadius: 4 }}
                  loading="lazy"
                />
                <p style={{ marginTop: 8, fontSize: 14, textAlign: 'center' }}>{item.title || item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Search
