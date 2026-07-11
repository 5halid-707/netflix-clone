import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'nav-dark' : ''}`}>
      <div className="navbar-left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src="/search_icon.svg" alt="search" />
        <p>Kids</p>
        <img className="icons" src="/bell_icon.svg" alt="notifications" />
        <div className="navbar-profile">
          <img className="profile" src="https://api.dicebear.com/7.x/avataaars/svg?seed=netflix" alt="profile" />
          <img className="icons" src="/caret_icon.svg" alt="" />
          <div className="dropdown">
            <Link to="/login"><p>Sign Out</p></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
