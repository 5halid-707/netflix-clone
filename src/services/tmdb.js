const KEY = import.meta.env.VITE_TMDB_KEY || 'e554b85d0e1881cd1ce8121f68462b30'
const BASE = 'https://api.themoviedb.org/3'
export const IMG_BASE = 'https://image.tmdb.org/t/p/w500'
export const IMG_BASE_LG = 'https://image.tmdb.org/t/p/w1280'

export const img = (path, size = 'w500') => path ? `https://image.tmdb.org/t/p/${size}${path}` : null

async function api(endpoint) {
  const res = await fetch(`${BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${KEY}&language=ar-SA`)
  return res.json()
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
