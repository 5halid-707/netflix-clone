import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Player from './pages/Player'
import TvShows from './pages/TvShows'
import Movies from './pages/Movies'
import NewPopular from './pages/NewPopular'
import MyList from './pages/MyList'
import Admin from './pages/Admin'
import Payment from './pages/Payment'
import Search from './pages/Search'
import Details from './pages/Details'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/new-popular" element={<NewPopular />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App
