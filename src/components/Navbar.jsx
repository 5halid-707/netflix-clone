import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t, toggleLang, lang } = useLanguage()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.tvShows'), path: '/tv-shows' },
    { label: t('nav.movies'), path: '/movies' },
    { label: t('nav.newPopular'), path: '/new-popular' },
    ...(user ? [{ label: t('nav.myList'), path: '/my-list' }] : []),
  ]

  const handleSearchClick = () => { navigate('/search'); }

  return (
    <nav className={`navbar ${scrolled ? 'nav-dark' : ''}`}>
      <div className="navbar-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        <ul>
          {navItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path} style={{ color: '#e5e5e5', textDecoration: 'none' }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src="/search_icon.svg" alt={t('nav.search')} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
        <p style={{ cursor: 'pointer' }}>{t('nav.kids')}</p>
        <img className="icons" src="/bell_icon.svg" alt={t('nav.notifications')} />
        <div className="navbar-profile">
          <img
            className="profile"
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email || 'guest'}`}
            alt="profile"
          />
          <img className="icons" src="/caret_icon.svg" alt="" />
          <div className="dropdown">
            {user ? (
              <>
                <p style={{ fontSize: 12, color: '#999', cursor: 'default' }}>{user.email}</p>
                {user.isAdmin && (
                  <p onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }}>{t('admin.title')}</p>
                )}
                <p onClick={() => navigate('/payment')} style={{ cursor: 'pointer' }}>{t('payment.title')}</p>
                <p onClick={handleLogout} style={{ cursor: 'pointer' }}>{t('nav.signOut')}</p>
              </>
            ) : (
              <>
                <p onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>{t('auth.signIn')}</p>
                <p onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>{t('auth.signUp')}</p>
              </>
            )}
            <div style={{ borderTop: '1px solid #333', marginTop: 8, paddingTop: 8 }}>
              <p onClick={toggleLang} style={{ cursor: 'pointer', color: '#e50914' }}>
                {lang === 'ar' ? 'English' : 'العربية'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
