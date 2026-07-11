import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
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
        <div className="lang-selector-nav" onClick={() => setLangOpen(!langOpen)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.42 4.8h-2.22c-.22-1.04-.58-2.01-1.06-2.86 1.44.3 2.7 1.18 3.28 2.86zM8 1.64c.64.82 1.16 1.78 1.5 2.86H6.5c.34-1.08.86-2.04 1.5-2.86zM3.42 6.4H1.16c.22-1.62 1.02-3.02 2.2-4.02-.54.94-.9 2.04-1.14 3.3zm-.28 1.2h2.42c.1 1.4.42 2.82 1.02 4.2H4.4c-.82-1.24-1.34-2.7-1.4-4.2zm2.42-1.2H4.7c.06-1.5.58-2.96 1.4-4.2h2.36c.82 1.24 1.34 2.7 1.4 4.2H8.86c-.1-1.4-.42-2.82-1.02-4.2H7.7c-.6 1.38-.92 2.8-1.02 4.2zm1.02 6.56c-.6-1.38-.92-2.8-1.02-4.2h2.04c-.1 1.4-.42 2.82-1.02 4.2zm-1.5-.8c-.48-.85-.84-1.82-1.06-2.86H4.7c.58 1.68 1.84 2.56 3.28 2.86zm4.28-4.56c-.06 1.5-.58 2.96-1.4 4.2h-2.36c-.82-1.24-1.34-2.7-1.4-4.2h5.16zm.28-1.2h2.42c-.06 1.5-.58 2.96-1.4 4.2h-2.36c.6-1.38 1.06-2.8 1.16-4.2zm-2.76-7c.48.85.84 1.82 1.06 2.86h2.22c-.58 1.68-1.84 2.56-3.28 2.86.48-.85.84-1.82 1.06-2.86z" fill="white"/>
          </svg>
          <span>{t('lang.select')}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="white" strokeWidth="1.5"/>
          </svg>
          {langOpen && (
            <div className="lang-dropdown-nav">
              <div onClick={() => { if (lang !== 'ar') toggleLang(); setLangOpen(false); }} className={lang === 'ar' ? 'active' : ''}>العربية</div>
              <div onClick={() => { if (lang !== 'en') toggleLang(); setLangOpen(false); }} className={lang === 'en' ? 'active' : ''}>English</div>
            </div>
          )}
        </div>
        <img className="icons" src="/assets/search_icon.svg" alt={t('nav.search')} onClick={() => navigate('/search')} style={{ cursor: 'pointer' }} />
        <p style={{ cursor: 'pointer' }}>{t('nav.kids')}</p>
        <img className="icons" src="/assets/bell_icon.svg" alt={t('nav.notifications')} />
        <div className="navbar-profile">
          <img
            className="profile"
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email || 'guest'}`}
            alt="profile"
          />
          <img className="icons" src="/assets/caret_icon.svg" alt="" />
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
