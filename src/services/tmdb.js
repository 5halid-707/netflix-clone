import { categories as fb, allItems as fbAll } from '../data/movies.js'

const KEY = import.meta.env.VITE_TMDB_KEY || 'e554b85d0e1881cd1ce8121f68462b30'
const BASE = 'https://api.themoviedb.org/3'
export const IMG_BASE = 'https://image.tmdb.org/t/p/w500'
export const IMG_BASE_LG = 'https://image.tmdb.org/t/p/w1280'

export const img = (path, size = 'w500') => path ? `https://image.tmdb.org/t/p/${size}${path}` : null

const toRes = (items) => ({
  results: (items || []).map(item => ({
    id: item.id,
    title: item.name,
    name: item.name,
    backdrop_path: item.path,
    poster_path: item.path,
    media_type: item.type || 'movie',
    vote_average: 8.5,
    overview: '',
    genre_ids: [],
    release_date: `${item.year || 2024}-01-01`,
    first_air_date: `${item.year || 2024}-01-01`,
    popularity: 100,
  }))
})

const toDetail = (item) => item ? {
  id: item.id,
  title: item.name,
  name: item.name,
  backdrop_path: item.path,
  poster_path: item.path,
  overview: item.name,
  vote_average: 8.5,
  genres: [{ id: 1, name: item.type === 'tv' ? 'مسلسل' : 'فيلم' }],
  release_date: `${item.year || 2024}-01-01`,
  first_air_date: `${item.year || 2024}-01-01`,
  number_of_seasons: item.type === 'tv' ? 1 : undefined,
  runtime: item.type !== 'tv' ? 120 : undefined,
  videos: { results: [] },
  credits: { cast: [], crew: [] },
  recommendations: { results: [] },
} : null

function fallbackResults(endpoint) {
  const base = endpoint.split('?')[0].replace(/\/\d+$/, '')
  if (/\/trending\//.test(base)) return toRes(fb.trending)
  if (base === '/movie/popular') return toRes(fb.popular)
  if (base === '/tv/popular') return toRes(fb.popular)
  if (base === '/movie/top_rated') return toRes(fb.topRated?.filter(i => i.type === 'movie'))
  if (base === '/tv/top_rated') return toRes(fb.topRated?.filter(i => i.type === 'tv'))
  if (base === '/movie/now_playing') return toRes(fb.popular)
  if (base === '/tv/airing_today') return toRes(fb.trending?.filter(i => i.type === 'tv'))
  if (/\/discover\/movie/.test(base)) return toRes(fb.action)
  if (/\/discover\/tv/.test(base)) return toRes(fb.trending?.filter(i => i.type === 'tv'))
  if (/\/genre\//.test(base)) return { genres: [] }
  if (/\/search\//.test(base)) return { results: [] }
  if (/\/videos/.test(base)) return { results: [] }
  if (/\/credits/.test(base)) return { cast: [], crew: [] }
  const idMatch = endpoint.match(/(\d+)/)
  if (idMatch) {
    const item = fbAll.find(i => i.id === parseInt(idMatch[1]))
    if (item) return toDetail(item)
  }
  return { results: [] }
}

async function api(endpoint) {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    const url = `${BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${KEY}&language=ar-SA`
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timer)
    const data = await res.json()
    if (data.success === false) throw new Error(data.status_message)
    return data
  } catch {
    return fallbackResults(endpoint)
  }
}

export const tmdb = {
  trending: (media = 'all', time = 'week') => api(`/trending/${media}/${time}`),
  popular: (type = 'movie', page = 1) => api(`/${type}/popular?page=${page}`),
  topRated: (type = 'movie', page = 1) => api(`/${type}/top_rated?page=${page}`),
  nowPlaying: (page = 1) => api(`/movie/now_playing?page=${page}`),
  airingToday: (page = 1) => api(`/tv/airing_today?page=${page}`),
  search: (query, page = 1) => api(`/search/multi?query=${encodeURIComponent(query)}&page=${page}`),
  details: (type, id) => api(`/${type}/${id}?append_to_response=videos,credits,recommendations`),
  discover: (type, params = {}) => {
    const query = Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')
    return api(`/discover/${type}?${query}`)
  },
  genres: (type) => api(`/genre/${type}/list`),
  byGenre: (type, genreId, page = 1) => api(`/discover/${type}?with_genres=${genreId}&page=${page}`),
  videos: (type, id) => api(`/${type}/${id}/videos`),
  credits: (type, id) => api(`/${type}/${id}/credits`),
}
